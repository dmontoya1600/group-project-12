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

// router.get('/', csrfProtection, (req, res, next) => {
//     res.render('login', {
//         title: "Login",
//         csrfToken: req.csrfToken(),

//     });
// });



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

    let errors = []
    const validationErrors = validationResult(req);
    // const valPassword = await User.findOne({ where: { password=hashedPassword } });

    // console.log(validationErrors);

    if (validationErrors.isEmpty()) {
        const findUser = await User.findOne({ where: { userName } });
        // console.log(findUser)

        if (findUser !== null) {
            // If the user exists then compare their password
            // to the provided password.
            // const hashedPassword = await bcrypt.hash(password, 10)
            const passwordMatch = await bcrypt.compare(password, findUser.hashedPassword.toString());


            if (passwordMatch) {
                // If the password hashes match, then login the user
                // and redirect them to the default route.
                loginUser(req, res, findUser);
                return res.redirect('/');

            }

            errors.push('Login failed for the provided User Name and password');
            // console.log(errors)
            res.render('login', {
                title: 'Login',
                errors: errors,
                csrfToken: req.csrfToken(),
            })
        }
        
        // Otherwise display an error message to the user.
    } else  {
        errors = validationErrors.array().map((error) => error.msg);
        // console.log(`FUUUUUUUUUUUCK is it ... ${findUser}, ${valPassword}`)
    }

}));



module.exports = router;
