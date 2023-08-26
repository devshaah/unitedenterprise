const mongoose = require('mongoose')
const {Schema} =  mongoose



const companySchema = new Schema({
    company :{type:String,required:true}
})
exports.Companies = mongoose.model('Company', companySchema)