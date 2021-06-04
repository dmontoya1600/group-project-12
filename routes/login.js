const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { User } = require('../db/models');
const { loginUser } = require('../auth');

const bcrypt = require('bcryptjs');

router.get(
	'/',
	csrfProtection,
	asyncHandler(async (req, res, next) => {
		res.render('login', {
			title: 'Login',
			csrfToken: req.csrfToken(),
		});
	})
);

const loginValidators = [
	check('userName')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for User Name'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Password'),
];

router.post(
	'/',
	csrfProtection,
	loginValidators,
	asyncHandler(async (req, res, next) => {
		const { userName, password } = req.body;
		const findUser = await User.findOne({ where: { userName } });
		let errors = [];
		const validationErrors = validationResult(req);
		if (!findUser) {
			errors.push('The provided User Name does not exist!');
			// console.log(errors)
			res.render('login', {
				title: 'Login',
				errors: errors,
				csrfToken: req.csrfToken(),
			});
		}

		if (findUser !== null) {
			// If the user exists then compare their password
			// to the provided password.
			// const hashedPassword = await bcrypt.hash(password, 10)
			const passwordMatch = await bcrypt.compare(
				password,
				findUser.hashedPassword.toString()
			);

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
			});
		}
		// Otherwise display an error message to the user.
		else {
			errors = validationErrors.array().map((error) => error.msg);
		}
	})
);

router.get(
	'/demo',
	csrfProtection,
	asyncHandler(async (req, res, next) => {
		const user = User.build();
		res.render('login', {
			title: 'Login',
			user,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	'/demo',
	csrfProtection,
	asyncHandler(async (req, res, next) => {
		// find specific user
		const demoUserName = 'User';
		const findDemoUser = await User.findOne({
			where: { userName: `${demoUserName}` },
		});

		// creates user model instance
		if (findDemoUser) {
			loginUser(req, res, findDemoUser);
			res.redirect('/users');
		} else {
			const user = await User.create({
				email: 'test12312312@testing.com',
				firstName: 'Demo',
				lastName: 'User',
				userName: 'User',
				hashedPassword: 'password',
			});

			loginUser(req, res, user);
			res.redirect('/users');
		}
	})
);

module.exports = router;
