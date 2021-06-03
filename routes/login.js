const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');
const { loginUser } = require('../auth');
const bcrypt = require('bcryptjs');

// GET route for path /login that renders pug template 'login', page title, and csrfToken
router.get('/', csrfProtection, asyncHandler(async (req, res, next) => {
    res.render('login', {
        title: "Login",
        csrfToken: req.csrfToken(),
    });
}));

// loginValidator array with middleware that will get passed into our post method which checks if a username and password exists
const loginValidators = [
    check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for User Name'),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

// POST route
router.post('/', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
    // Destructures our request body to pull out our username and password
    const { userName, password } = req.body;
    // Errors array to push any errors we get into
    let errors = []
    // validationErrors function which is our validationResult with the request passed into it
    const validationErrors = validationResult(req);
    // PSQL query that checks our database for if the username exists
    const findUser = await User.findOne({ where: { userName } });

        if (!findUser) {
            // Push error if username doesn't exist
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
            // If password doesn't math then push error to errors array to render
            errors.push('Wrong password!');
            res.render('login', {
                title: 'Login',
                errors: errors,
                csrfToken: req.csrfToken(),
            })
        }
}));


module.exports = router;
