const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, userAccessOnly } = require('../auth');
const { User, Movie, Favorite } = require('../db/models');
const images = require('./images');



router.post('/', asyncHandler(async(req, res, next) => {
    // we are creating a new row in the favorite DT and passing in movieId and  userId
    const { movieId } = req.body;
    const userId = req.session.auth.userId
    console.log(movieId, userId)
    await Favorite.create({
        movieId: movieId,
        userId: userId
    });
}));

router.put('/', asyncHandler(async(req, res, next) => {
    // just destroying the row in the favorites column that includes the movieId
    const { movieId } = req.body;
    const deleteFavorites = await Favorite.destroy({where: {
        movieId
    }})
}));





module.exports = router
