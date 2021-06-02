const express = require('express');
const router = express.Router();

const { logoutUser } = require('../auth');

router.post('/logout', (req, res) => {
	logoutUser(req, res);
	res.redirect('/');
});

module.exports = router;
