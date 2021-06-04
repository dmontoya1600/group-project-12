const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const images = require('./images');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

// renders all movies
router.get(
	'/',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();
		movies.forEach((movie) => (movie.image = images[movie.id]));
		res.render('movies', {
			movies,
			images,
			csrfToken: req.csrfToken(),
		});
	})
);

// Finds movie based on id
router.post('/fetch', asyncHandler(async (req, res) => {
	console.log(req.body.YES)
}))

router.get(
	'/:id(\\d+)',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await db.Movie.findByPk(movieId);
		const reviews = await db.Review.findAll({
			where: { movieId: movie.id },
			include: ['Movie', 'User'],
		});
		movie.image = images[movie.id];
		// if movie not found, 404
		if (!movie) {
			res.status(404);
			res.send('movie cannot be found!');
		} else if (req.session.auth) {
			const userId = req.session.auth.userId;
			const userReviews = await db.Review.findAll({
				where: { movieId: movie.id, userId: userId },
				include: ['Movie', 'User'],
			});
			res.render('movie', {
				title: `${movie.title}`,
				movie,
				userReviews,
				reviews,
				csrfToken: req.csrfToken(),
			});
		} else {
			res.render('movie', {
				title: `${movie.title}`,
				movie,
				reviews,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

module.exports = router;
