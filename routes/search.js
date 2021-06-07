const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const images = require('./images');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('search');
});

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		// searchQuery is the input value of the search bar
		const searchQuery = req.body.search;
		// gives us an array of all the movies
		const movies = await db.Movie.findAll();
		movies.forEach((movie) => (movie.image = images[movie.id]));
		//we lowercase all the movies that way capitalization doesn't matter
		const result = movies.filter((movie) =>
			movie.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
		console.log(result);

		res.render('search-result', { result, images });
	})
);

module.exports = router;
