const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, userAccessOnly } = require('../auth');
const { User, Movie, Favorite } = require('../db/models');
const images = require('./images');



router.post('/', asyncHandler(async(req, res, next) => {

    const { movieId } = req.body;
    const userId = req.session.auth.userId
    console.log(movieId, userId)
    await Favorite.create({
        movieId: movieId,
        userId: userId
    });
}));

router.put('/', asyncHandler(async(req, res, next) => {

    const { movieId } = req.body;
    const deleteFavorites = await Favorite.destroy({where: {
        movieId
    }})
}));





module.exports = router
