const fs =require('fs')
let text=fs.readFileSync('fileToRead.txt','utf-8')
console.log(text)



//writing a file or modifying
let textrepl=text.replace('to read','written')
fs.writeFileSync('replaced.txt',textrepl)