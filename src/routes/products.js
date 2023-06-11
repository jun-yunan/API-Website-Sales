const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');

const userAuthenticationMiddleware = require('../app/middleware/userAuthenticationMiddleware');

router.get('/products', productController.getProducts);

module.exports = router;
