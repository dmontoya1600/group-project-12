const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');
const { loginUser } = require('../auth');
const bcrypt = require('bcryptjs');



router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {

    res.render('login', {
        title: "Login",
        csrfToken: req.csrfToken(),
    });
}));

const loginValidators = [
    check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for User Name'),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
    const { userName, password } = req.body;
    const findUser = await User.findOne({ where: { userName } });
    let errors = []
    const validationErrors = validationResult(req);

    if (!findUser) {
        errors.push('The provided User Name does not exist!');
        res.render('login', {
            title: 'Login',
            errors: errors,
            csrfToken: req.csrfToken(),
        })
    }

    if (findUser !== null) {
        // If the user exists then compare their password
        // to the provided password.
        const passwordMatch = await bcrypt.compare(password, findUser.hashedPassword.toString());

        if (passwordMatch) {
            // If the password hashes match, then login the user
            // and redirect them to the default route.
            loginUser(req, res, findUser);
            return res.redirect('/users');
        }

        errors.push('Wrong password!');
        res.render('login', {
            title: 'Login',
            errors: errors,
            csrfToken: req.csrfToken(),
        })
    }
}));


module.exports = router;
