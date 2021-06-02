const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');
const { loginUser } = require('../auth')


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
    const { username, password } = req.body;

    let errors = []
    const validatorErrors = validationResult(req);
    const valPassword = await User.findByPk(password);

    if (validationError.isEmpty()) {
        const findUser = await User.findByPk(username);

        if (findUser !== null) {
              // If the user exists then compare their password
            // to the provided password.
            const passwordMatch = await bcrypt.compare(password, findUser.hashedPassword.toString());

            if (passwordMatch) {
                // If the password hashes match, then login the user
                // and redirect them to the default route.
                loginUser(req, res, findUser);
                return res.redirect('/');

            }
        }
    }

}));



module.exports = router;
