const express = require('express')

const app = express()
const port = 5000

app.get("/",(req,res)=>{
    res.send("Express with nodemon is working")
})

app.listen(port,()=>{
    console.log("I am coding")
})

app.get("/about",(req,res)=>{
    res.send("About Page is easy")
})

app.get('/welcome',(req,res)=>{
    res.send("Welcome to page")
})