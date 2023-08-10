const model = require('../models/product')
const mongoose =require('mongoose')
const Product = model.Product



exports.createProduct = (req,res) =>{

    const product = new Product(req.body)
    product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(401).json(err);
    });


}
exports.getAllProducts = (req,res) =>{
    res.status(200).json(req.body)


}