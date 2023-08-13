const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port =process.env.PORT || 5001
const productRouter = require('./routes/product')
const fileUpload = require('express-fileupload');
const mongoose =require ('mongoose')

app.use(fileUpload({
    useTempFiles:true
}))

// db connection 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://daveth1106:${process.env.DB_PASSWORD}@unitedenterprise.awcphrj.mongodb.net/user?retryWrites=true&w=majority`);
    console.log("database connected")
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }



app.use(express.json())
app.use('/product',productRouter.router)

app.listen(port, ()=>{
    console.log(`connected to ${port}`)
})

