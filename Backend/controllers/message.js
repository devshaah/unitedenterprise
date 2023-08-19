const model =require('../models/message')
const Message = model.Message


exports.createMessage=(req,res)=>{
    const message = new Message({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message

    })
    message
    .save()
    .then((doc) => {
        res.status(201).json(doc);
      })
      .catch((err) => {
        res.status(400).json(err);
      });

}
exports.getAllMessages= async(req,res)=>{
    const messages = await Message.find()
   res.status(200).json(messages)

}