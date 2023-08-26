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


const file = req.file.buffer
const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
  if (error) {
    console.error('Error uploading to Cloudinary:', error);
    return res.status(500).json({ error: 'An error occurred while uploading the file.' });
  }
  const product = new Product({
      prodname:req.body.prodname,
      quantity:req.body.quantity,
      company:req.body.company,
      category:req.body.category,
      subcategory:req.body.subcategory,
      image:result.secure_url
  
    })
    
    // if(!companies.includes(req.body.company))
    // {
    //   companies.push(req.body.company)
    // }
    exports.company = req.body.company





    // res.send(product)
    product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(400).json(err);
    });

  

  
});

// Pipe the file buffer to the Cloudinary upload stream
uploadStream.end(file);


    


}
exports.getAllProducts = async(req,res) =>{
  const products = await Product.find()
    res.status(200).json(products)
  // res.send('hello')


}

