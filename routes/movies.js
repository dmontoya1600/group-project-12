const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();

		res.render('movies', {
			movies,
		});
	})
);

router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
		const movieId = req.params.id;
		const movie = await db.Movie.findByPk(movieId);

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
