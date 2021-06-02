const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models')


router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
    //query usernames => find one by UserName
    const { username, password } = req.body;
    const findUser = await User.findByPk(username);
    const valPassword = await User.findByPk(password);
    if (!findUser) {
        res.render('/login');
        throw new Error('Invalid Username');

    }
    res.render('login', {
        title: "Login",
        csrfToken: req.csrfToken(),

    });

    res.redirect('/user/:id')
}));

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
    const { emailAddress, password } = req.body;

    let errors = []
    
}));



module.exports = router;
