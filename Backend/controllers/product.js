const model = require('../models/product')
const mongoose =require('mongoose')
const Product = model.Product
const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv").config();


cloudinary.config({ 
  cloud_name:process.env.CLOUD_NAME, 
  api_key:process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  // secure: true
});



exports.createProduct = (req,res) =>{


const file = req.files.image
cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
  // console.log(req.body)
  // console.log(result)
  const product = new Product({
    prodname:req.body.prodname,
    quantity:req.body.quantity,
    company:req.body.company,
    category:req.body.category,
    subcategory:req.body.subcategory,
    image:result.url

  })
  // console.log(product)
  // res.send(product)

  // uncomment once database is connected

  product
  .save()
  .then((doc) => {
    res.status(201).json(doc);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}) 
    


}
exports.getAllProducts = async(req,res) =>{
  const products = await Product.find()
    res.status(200).json(products)


}