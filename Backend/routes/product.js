const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const multer=require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router
 .get('/',productController.getAllProducts)
 .get("/:item", productController.getProduct)
 .post('/',upload.single('file'),productController.createProduct)


exports.router=router