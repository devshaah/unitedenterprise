const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    prodname:{type:String, required:[true , "Name of the product is mandatory"] },
    quantity :{type:Number, required:true , min:[0,"Minimum quantity is zero"]},
    company:{type:String, required:[true , "Company of the product is mandatory"] },
    category:{type:String, required:[true , "Category of the product is mandatory"]},
    subcategory:{type:String },
    // image :{type:String, required:[true,"Image of the product is mandatory"]}
})
exports.Product = mongoose.model('product',productSchema)