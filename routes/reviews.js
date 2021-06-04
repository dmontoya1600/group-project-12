const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');

const { Movie, Review } = require('../db/models');

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
		Review.create({
			movieId: movieId,
			userId: userId,
			comment: comment,
		});

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
		console.log('inside delete route', review);
		await review.destroy();
		res.redirect(`/movies/${review.movieId}`);
	})
);

module.exports = router;
