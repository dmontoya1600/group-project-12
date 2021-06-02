const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const restoreUser = require('../auth');
const {User} = require('../db/models');


/* GET users listing. */
router.get('/', asyncHandler(async(req, res, next) => {
	const sessions = req.session.auth;

	res.render('users', {

	});
}));

module.exports = router;
