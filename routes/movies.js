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
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();

		res.render('movies', {
			movies,
			images,
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

module.exports = router;
