const express = require('express')
const app = express()
const port = 5003
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/db1')

const mySchema = new mongoose.Schema({
    name: { type : String, required : true },
    age : { type : Number, required : true},
    email : { type : String, required : true }
})

const users = mongoose.model("Users",mySchema)

app.get("/",(req,res)=>{
    //console.log("hi")
    //res.send("<h1> Home page </h1>")
    users.find()
        .then(data=>res.json(data))
})

app.post('/',(req,res)=>{
    const {name,age,email} = req.body
    const newItem = new users({name,age,email})
    newItem.save()
        .then(data=>res.json())
})

app.put("/:id",(req,res)=>{
    const{name,age,email} = req.body
    users.findByIdAndUpdate(req.params.id,{name,age,email},{new:true})
        .then(data=>res.json(data))
})

app.delete('/:id',(req,res)=>{
    users.findByIdAndDelete(req.params.id)
        .then(data => res.send("Deleted successfully"))
})

app.listen(port,()=>{
    console.log('hello world')
})