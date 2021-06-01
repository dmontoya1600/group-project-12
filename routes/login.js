const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models')


router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    //query usernames => find one by UserName
    const findUser = await User.findByPk(username);
    const valPassword = await User.findByPk(password);
    if (!findUser) {
        res.render('/login');
        throw new Error('Invalid Username');

    }
    res.render('/login', {

    });

    res.redirect('/user/:id')
}));




module.exports = router;
