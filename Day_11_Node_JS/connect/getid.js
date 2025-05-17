const express = require('express')
const app = express()

app.get("/user/:id",(req,res)=>{
    res.send(`the user id is ${req.params.id}`)
})

app.listen(3003,()=>{
    console.log("Demo of getting id")
})