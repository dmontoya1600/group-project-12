const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { restoreUser, userAccessOnly } = require('../auth');
const { User, Movie } = require('../db/models');
const images = require('./images');



router.post('/', csrfProtection, asyncHandler(async(req, res, next) => {

}))






module.exports = router
