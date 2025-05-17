const express = require('express')
const mongoose = require('mongoose')

const app = express()
const friendroute = require("./routes/friendroutes")
const port = 3003

mongoose.connect('mongodb://127.0.0.1:27017/xyz')

app.get("/",(req,res)=>{
    res.send("<h1>Home page")
})

app.use('/friends',friendroute)

app.listen(port,()=>{
    console.log('Making test apis')
})