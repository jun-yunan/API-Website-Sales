const express = require('express');
const router = express.Router();

const productController = require('.././app/controllers/ProductController');
const usersController = require('.././app/controllers/UserController');

const userAuthenticationMiddleware = require('.././app/middleware/userAuthenticationMiddleware');

//  USER
router.get('/getAllUser', userAuthenticationMiddleware, usersController.getAllUser);
router.post('/signup', usersController.signup);
router.post('/signIn', usersController.signIn);
router.get('/getUser/:id', usersController.getUserById);

// PRODUCT

router.get('/products', productController.getProducts);

module.exports = router;
