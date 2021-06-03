const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const restoreUser = require('../auth');
const { User, Movie } = require('../db/models');

/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
	// query all movies
	const allMovies = await Movie.findAll();

	//helper function to be passed in as callback for filter
	let filterMovies = function(genre) {
		return movie => movie.genre.includes(genre)
	}

	const horror = allMovies.filter(filterMovies('Horror'))
	const action = allMovies.filter(filterMovies('Action'))
	const adventure = allMovies.filter(filterMovies('Adventure'))
	const comedy = allMovies.filter(filterMovies('Comedy'))
	const drama = allMovies.filter(filterMovies('Drama'))
	const thriller = allMovies.filter(filterMovies('Thriller'))
	const fantasy = allMovies.filter(filterMovies('Fantasy'))
	const sciFi = allMovies.filter(filterMovies('Science Fiction'))

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
