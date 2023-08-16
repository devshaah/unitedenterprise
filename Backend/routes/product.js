const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')

router
 .get('/',productController.getAllProducts)
 .post('/',productController.createProduct)


exports.router=router