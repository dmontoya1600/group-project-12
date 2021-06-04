const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
// const {Movie, Review} = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

router.get(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await db.Movie.findByPk(movieId);
		const userId = req.session.auth.userId;
		res.render('review', {
			title: 'Review',
			movie,
			userId,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const { comment } = req.body;
		const movieId = req.params.id;
		const movie = await db.Movie.findByPk(movieId);
		const userId = req.session.auth.userId;
		const review = db.Review.create({
			movieId: movieId,
			userId: userId,
			comment: comment,
		});

		res.redirect(`/movies/${movieId}`);
	})
);

router.post(
	'/:id/delete',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const reviewId = req.params.id;
		const review = await db.Review.findByPk(reviewId);
		console.log('inside delete route', review);
		await review.destroy();
		res.redirect(`/movies/${movieId}`);
	})
);

module.exports = router;
