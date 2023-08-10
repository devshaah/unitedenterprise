const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port =process.env.PORT || 5001
const productRouter = require('./routes/product')

app.use(express.json())
app.use('/product',productRouter.router)

app.listen(port, ()=>{
    console.log(`connected to ${port}`)
})

