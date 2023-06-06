const express = require('express');
const router = express.Router();

const usersController = require('../app/controllers/usersController');

const userAuthenticationMiddleware = require('../app/middlewares/userAuthenticationMiddleware');

router.get('/getAllUser', userAuthenticationMiddleware, usersController.getAllUser);
router.post('/signup', usersController.signup);
router.post('/signIn', usersController.signIn);
router.get('/getUser/:id', usersController.getUserById);

module.exports = router;
