const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, userAccessOnly } = require('../auth');
const { User, Movie, Favorites } = require('../db/models');
const images = require('./images');



router.post('/', csrfProtection, asyncHandler(async(req, res, next) => {

    const { movieId, userId } = req.body;
    const favoritesCreate = await Favorites.create({
        movieId,
        userId
    });
}));

router.put('/', csrfProtection, asyncHandler(async(req, res, next) => {

    const { movieId } = req.body;
    const deleteFavorites = await Favorites.destroy({where: {
        movieId
    }})
}));





module.exports = router
