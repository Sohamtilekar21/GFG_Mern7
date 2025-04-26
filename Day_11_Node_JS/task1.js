const express = require('express')

const app = express()
const port = 3003

app.get("/",(req,res)=>{
    res.send("I am learning express <button>click me</button>")
})

app.listen(port,()=>{
    console.log("Express Day 1")
})

app.get("/hii",(req,res)=>{
    res.send("Hi , welcome to exp")
})

app.get("/about",(req,res)=>{
    res.send("About us")
})
