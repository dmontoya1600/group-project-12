const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const restoreUser = require('../auth');
const { User, Movie } = require('../db/models');

/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
	const allMovies = await Movie.findAll();

	const horror = allMovies.filter(movie => movie.genre.includes('Horror'))
	const action = allMovies.filter(movie => movie.genre.includes('Action'))
	const adventure = allMovies.filter(movie => movie.genre.includes('Adventure'))
	const comedy = allMovies.filter(movie => movie.genre.includes('Comedy'))
	const drama = allMovies.filter(movie => movie.genre.includes('Drama'))
	const thriller = allMovies.filter(movie => movie.genre.includes('Thriller'))
	const fantasy = allMovies.filter(movie => movie.genre.includes('Fantasy'))
	const sciFi = allMovies.filter(movie => movie.genre.includes('Science Fiction'))

  

	res.render('users', {
		horror,
		action,
		adventure,
		comedy,
		drama,
		thriller,
		fantasy,
		sciFi
	});
}));


module.exports = router;
