const http =require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.end(data)
    })
}).listen(3000)

console.log("Welcome to node")