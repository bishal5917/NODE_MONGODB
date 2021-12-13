const http=require("http")
const fs=require('fs')

let files=fs.readFileSync('box transforming project.html')

server=http.createServer((req,res) => {
    res.writeHead(200,"{content-type:text/html}")
    res.end(files)

})
server.listen(80,"127.0.0.1",()=>{
    console.log("opening on port 80")

})