const express = require('express');
const router = express.Router();

const { logoutUser } = require('../auth');

router.post('/', (req, res) => {
	logoutUser(req, res);
	res.redirect('/');
});

module.exports = router;
