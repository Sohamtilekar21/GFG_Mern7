const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/xyz')

const mySchema = new mongoose.Schema({
    name : {type : String , unique : true}
})
const Abc = mongoose.model('friend',mySchema)

module.exports = Abc