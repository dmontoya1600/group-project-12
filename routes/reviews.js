const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');

const { Movie, Review } = require('../db/models');
const db = require('../db/models');

router.get(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await Movie.findByPk(movieId);
		const userId = req.session.auth.userId;
		res.render('review', {
			title: 'Review',
			movie,
			userId,
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
		const  rating = Number(req.body.rating);
		const movie = await db.Movie.findByPk(movieId);
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
			allRatings.push(rating)
			let numReviews = allReviews.length
			allRatings.forEach(ratingNum => sumOfRatings += ratingNum);
			let average = (sumOfRatings / allRatings.length).toFixed(1)
			console.log('THIS IS THE LIST OF ratings', allRatings)
			console.log('THIS IS THE AVERAGE', average)
			await movie.update({
				avgRating: average
			})
		} else{
			await movie.update({
				avgRating: rating.toFixed(1)
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
		numReviews--;
		sumOfRatings -= rating

		let average;
		if(numReviews < 1){
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
