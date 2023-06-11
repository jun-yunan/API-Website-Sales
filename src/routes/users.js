const express = require('express');
const router = express.Router();

const usersController = require('../app/controllers/usersController');
// src / app / middleware / userAuthenticationMiddleware.js;
const userAuthenticationMiddleware = require('../app/middleware/userAuthenticationMiddleware');

router.get('/getAllUser', userAuthenticationMiddleware, usersController.getAllUser);
router.post('/signup', usersController.signup);
router.post('/signIn', usersController.signIn);
router.get('/getUser/:id', usersController.getUserById);

module.exports = router;
