const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const user = require('../db/models/user');

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
		const userId = req.session.auth.userId

		// we're joining reviews, movies, and users
		const reviews = await db.Review.findAll({
			where: {movieId: movie.id, userId: userId},
			include: ['Movie', 'User']
		})

		// if movie not found, 404
		if (!movie) {
			res.status(404);
			res.send('movie cannot be found!');
		} else {
			res.render('movie', {
				title: `${movie.title}`,
				movie,
				reviews
			});
		}
	})
);


module.exports = router;
