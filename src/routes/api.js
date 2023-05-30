const express = require('express');
const router = express.Router();

const ApiController = require('../app/controllers/ApiController');

router.get('/getAllUser', ApiController.getAllUser);

module.exports = router;
