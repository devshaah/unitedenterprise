const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port =process.env.PORT || 5001
const productRouter = require('./routes/product')
const messageRouter = require('./routes/message')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const mongoose =require ('mongoose')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload({useTempFiles:true}))

const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// db connection 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://daveth1106:${process.env.DB_PASSWORD}@unitedenterprise.awcphrj.mongodb.net/user?retryWrites=true&w=majority`);
    console.log("database connected")
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }



app.use(express.json())
app.use(cors())

app.use('/product',productRouter.router)
app.use('/message',messageRouter.router)




app.listen(port, ()=>{
    console.log(`connected to ${port}`)
})

