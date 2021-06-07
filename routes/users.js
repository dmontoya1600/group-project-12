const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, userAccessOnly } = require('../auth');
const { User, Movie, Favorite } = require('../db/models');
const images = require('./images');

/* GET users listing. */
router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		userAccessOnly(req, res);

		const allMovies = await Movie.findAll();
		allMovies.forEach((movie) => (movie.image = images[movie.id]));

		const userId = req.session.auth.userId;

		const allFavorites = await Favorite.findAll();

		const userFavorites = await Favorite.findAll({
			where: {
				userId: userId,
			},
		});

		userFavorites.forEach(
			(favorite) => (favorite.image = images[favorite.movieId])
		);

		const horror = allMovies.filter((movie) =>
			movie.genre.includes('Horror')
		);
		const action = allMovies.filter((movie) =>
			movie.genre.includes('Action')
		);
		const adventure = allMovies.filter((movie) =>
			movie.genre.includes('Adventure')
		);
		const comedy = allMovies.filter((movie) =>
			movie.genre.includes('Comedy')
		);
		const drama = allMovies.filter((movie) =>
			movie.genre.includes('Drama')
		);
		const thriller = allMovies.filter((movie) =>
			movie.genre.includes('Thriller')
		);
		const fantasy = allMovies.filter((movie) =>
			movie.genre.includes('Fantasy')
		);
		const sciFi = allMovies.filter((movie) =>
			movie.genre.includes('Science Fiction')
		);

		res.render('users', {
			horror,
			action,
			adventure,
			comedy,
			drama,
			thriller,
			fantasy,
			sciFi,
			images,
			userFavorites,
		});
	})
);

module.exports = router;
