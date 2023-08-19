const mongoose = require('mongoose')
const {Schema} =  mongoose

const messageSchema = new Schema({
    name: {type:String, required:[true]},
    email:{type:String, required:[true]},
    phone:{type:String, required:[true]},
    message:{type:String}
})
exports.Message = mongoose.model('Message', messageSchema)