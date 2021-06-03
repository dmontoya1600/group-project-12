const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// renders all movies
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();

		res.render('movies', {
			movies,
		});
	})
);

// Finds movie based on id
router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await db.Movie.findByPk(movieId);

		// if movie not found, 404
		if (!movie) {
			res.status(404);
			res.send('movie cannot be found!');
		} else {
			res.render('movie', {
				title: `${movie.title}`,
				movie,
			});
		}
	})
);

// router.get(
// 	'/:id(\\d+)',
// 	asyncHandler(async (req, res) => {
// 		const movieId = req.params.id;
// 		const movie = await db.Movie.findByPk(movieId);
// 		let reviews = await db.Review.findAll()
// 		let review = await db.Review.build()
// 		if(reviews.length === 0){
// 			review.id = 1
// 			review.movieId = movieId
// 		}

// 		console.log('THIS HERE IS THE REVIEWS ARRAY',reviews)
// 		console.log('THIS IS THE REVIEW', review)
// 		// if movie not found, 404
// 		if (!movie) {
// 			res.status(404);
// 			res.send('movie cannot be found!');
// 		} else {
// 			res.render('movie', {
// 				title: `${movie.title}`,
// 				movie,
// 				review
// 			});
// 		}
// 	})
// );

module.exports = router;
