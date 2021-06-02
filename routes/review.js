const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// renders all movies
// router.get(
// 	'/',
// 	asyncHandler(async (req, res) => {
// 		const movies = await db.Movie.findAll();

// 		res.render('movies', {
// 			movies,
// 		});
// 	})
// );

// Finds review based on movie id
router.get(
	'/',
	csrfProtection,
	asyncHandler(async (req, res) => {
		// create instance of review
		const review = db.Review.build();

		const movieId = req.body.movieId;
		console.log('id', movieId);
		res.render('review', {
			title: 'Review',
			review,
			movieId,
			csrfToken: req.csrfToken(),
		});
	})
);

router.get(
	'/:id',
	csrfProtection,
	asyncHandler(async (req, res) => {})
);

router.post(
	'/',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const {} = req.body;
		const review = db.Review.build();

		res.redirect(`/movie/${movie.id}`);
	})
);

module.exports = router;
