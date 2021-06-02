const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
// const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get('/', csrfProtection, (req, res) => {
	// creates User model instance
	const user = db.User.build();

	// renders sign up
	res.render('signup', {
		title: 'Sign Up',
		user,
		csrfToken: req.csrfToken(),
	});
});

// validates user input fields
const userValidators = [
	check('firstName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for First Name')
		.isLength({ max: 20 })
		.withMessage('First Name must not be more than 20 characters long'),
	check('lastName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Last Name')
		.isLength({ max: 20 })
		.withMessage('Last Name must not be more than 20 characters long'),
	check('email')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Email Address')
		.isLength({ max: 100 })
		.withMessage('Email Address must not be more than 100 characters long')
		.isEmail()
		.withMessage('Email Address is not a valid email')
		.custom((value) => {
			return db.User.findOne({ where: { email: value } }).then((user) => {
				if (user) {
					return Promise.reject(
						'The provided Email Address is already in use by another account'
					);
				}
			});
		}),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Password')
		.isLength({ max: 50 })
		.withMessage('Password must not be more than 50 characters long')
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
		.withMessage(
			'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
		),
	check('confirmPassword')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Confirm Password')
		.isLength({ max: 50 })
		.withMessage(
			'Confirm Password must not be more than 50 characters long'
		)
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Confirm Password does not match Password');
			}
			return true;
		}),
	check('userName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Username')
		.isLength({ max: 20 })
		.withMessage('Username must not be more than 20 characters long')
		.withMessage('Username is not valid')
		.custom((value) => {
			return db.User.findOne({ where: { userName: value } }).then(
				(user) => {
					if (user) {
						return Promise.reject(
							'The provided User is already in use by another account'
						);
					}
				}
			);
		}),
];

router.post(
	'/',
	csrfProtection,
	userValidators,
	asyncHandler(async (req, res) => {
	// 	// grabs input values from submitted form
		const { email, firstName, lastName, userName, password } = req.body;

		const user = db.User.build({
			email,
			firstName,
			lastName,
			userName,
		});



		const validatorErrors = validationResult(req);

		// If user input is validated encrypt password.
        
		if (validatorErrors.isEmpty()) {
			// Hash inputted password
			const hashedPassword = await bcrypt.hash(password, 10);
			user.hashedPassword = hashedPassword;
			await user.save();
			// loginUser function (req, res, user);
			res.redirect('/');
		} else {
			// console.log(user);
			const errors = validatorErrors.array().map((error) => error.msg);
			res.render('signup', {
				title: 'Sign Up',
				user,
				errors,
				csrfToken: req.csrfToken(),
			});
		}

	})
);

module.exports = router;
