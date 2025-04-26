const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home page </h1> <a href="/about">Go to about')
        res.end()
    }else if(req.url==='/about'){
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h3>this is an about page <a href="/contact">Go to contact')
        res.end()
    }else if(req.url==='/contact'){
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h3>this is an contact page <a href="/">G to home')
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h3>404 , no page found <a href="/">G to home')
        res.end()
    }
})
console.log("hello server")
//console.log(server)

server.listen(5000,()=>{
    console.log("server is ready")
})

console.log("I am working")