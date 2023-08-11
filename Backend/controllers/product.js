const model = require('../models/product')
const mongoose =require('mongoose')
const Product = model.Product



exports.createProduct = (req,res) =>{
  // uncomment when u connect the databse


    const product = new Product({
      prodname:req.body.prodname,
      quantity:req.body.quantity,
      company:req.body.company,
      category:req.body.category,
      subcategory:req.body.subcategory,

    })
    res.send(product)

    // uncomment once database is connected 
    // product
    // .save()
    // .then((doc) => {
    //   res.status(201).json(doc);
    // })
    // .catch((err) => {
    //   res.status(400).json(err);
    // });


}
exports.getAllProducts = (req,res) =>{
    res.status(200).json(req.body)


}