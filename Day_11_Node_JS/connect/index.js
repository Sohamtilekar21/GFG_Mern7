const express = require('express')
const app = express()
const port = 3003
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/xyz')

const mySchema = new mongoose.Schema({
    name : {type : String , unique : true}
})
const Abc = mongoose.model('friend',mySchema)
// const hii = new Abc({name : "abbc"})
//     .save()
//     .then(()=>console.log("connected"))

app.get("/",(req,res)=>{
    res.send("<h1>Home page")
})

app.get('/fr',(req,res)=>{
    Abc.find()
        .then(data=>res.json(data))
})

app.post('/fr',(req,res)=>{
    // console.log(req.body)
    const {name} =  req.body
    const newData = new Abc ({name})
    newData.save()
        .then(data=>res.json())
        .catch(err=>send("the error is"+ err.message))
})

app.listen(port,()=>{
    console.log('Making test apis')
})