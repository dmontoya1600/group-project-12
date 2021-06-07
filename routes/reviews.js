const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const images = require('./images')

const { Movie, Review } = require('../db/models');
const db = require('../db/models');

router.get(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await Movie.findByPk(movieId);
		movie.image = images[movieId];
		const userId = req.session.auth.userId;
		res.render('review', {
			title: 'Review',
			movie,
			userId,
			images,
			csrfToken: req.csrfToken(),
		});
	})
);
// review page
router.get(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await Movie.findByPk(movieId);

		if (req.session.auth) {
			const userId = req.session.auth.userId;
			res.render('review', {
				title: 'Review',
				movie,
				userId,
				csrfToken: req.csrfToken(),
			});
		} else {
			res.render('review', {
				title: 'Review',
				movie,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

// save review to server
router.post(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const { comment } = req.body;
		const movieId = req.params.id;
		const userId = req.session.auth.userId;
		const rating = Number(req.body.rating);
		const movie = await db.Movie.findByPk(movieId);
		// gets all the reviews of this movie ^
		const allReviews = await db.Review.findAll({
			where: {
				movieId: movieId
			}
		})

		Review.create({
			movieId: movieId,
			userId: userId,
			comment: comment,
			rating: rating
		});

		if(allReviews.length > 0){
			let sumOfRatings = 0;
			const allRatings = allReviews.map(review => review.rating)
			// creates an array of ratings
			allRatings.push(rating)
			// pushes in newly created rating
			let numReviews = allReviews.length
			allRatings.forEach(ratingNum => sumOfRatings += ratingNum);
			let average = (sumOfRatings / numReviews).toFixed(1)

			//updates the avgRating column of the movie row
			await movie.update({
				avgRating: average
			})
		} else{
			//since we can't divide by zero, we must update the avgRating directly if the avgRating is 0.0
			await movie.update({
				avgRating: rating.toFixed(1)
				// decimal (2,1)
			})
		}

		res.redirect(`/movies/${movieId}`);
	})
);

// delete review
router.post(
	'/:id/delete',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const reviewId = req.params.id;
		const review = await Review.findByPk(reviewId);
		const rating = review.rating
		const movie = await Movie.findByPk(review.movieId)
		const movieId = review.movieId
		const allReviews = await db.Review.findAll({
			where: {
				movieId: movieId
			}
		})

		let sumOfRatings = 0;
		const allRatings = allReviews.map(review => review.rating)
		let numReviews = allReviews.length
		allRatings.forEach(ratingNum => sumOfRatings += ratingNum);
		// since we're working with averages, in order to make it work we need to subtract the rating of the review being deleted from the sum of ratings
		// we also have to make sure that the numReviews substracts by 1 so that it mimics that number of reviews after removing one.
		numReviews--;
		sumOfRatings -= rating

		let average;
		if(numReviews < 1){
			//if we destroyed the final review then it'll update the avg to 0.0

			average = 0;
		} else{
			average = (sumOfRatings / numReviews).toFixed(1);
		}
		await movie.update({
			avgRating: average
		})

		await review.destroy();
		res.redirect(`/movies/${review.movieId}`);
	})
);

module.exports = router;
