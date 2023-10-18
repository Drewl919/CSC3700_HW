const express = require('express');
const router = express.Router();
const path = require('path');
const surveyController = require("../controllers/survey")

router.get( '/add-products', productsController.getAddProduct );
router.post( '/product', surveyController.postAddProduct);

exports.routes = router;