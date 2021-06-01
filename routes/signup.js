const express = require('express');
const router = express.Router();
const session = require('express-session');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/signup', function (req, res, next) {
    
});

module.exports = router;
