const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    prodname:{type:String, required:[true , "Name of the product should be mentioned"] },
    quantity :{type:Number, required:true , min:[0,"Minimum quantity is zero"]},
    company:{type:String, required:[true , "Company of the product should be mentioned"] },
    category:{type:String, required:[true , "Category of the product should be mentioned"]},
    subcategory:{type:String },
    // image pending
})
exports.Product = mongoose.model('product',productSchema)