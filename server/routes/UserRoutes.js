const express = require('express');
const router = express.Router();
const { registerUser,verifyEmail,login } = require('../controller/UserController');

router.post('/register',registerUser);
router.post('/verify-email',verifyEmail)
router.post('/login',login);

module.exports = router;