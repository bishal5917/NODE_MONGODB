const express = require('express')
const app= express();

const port =80

app.get("/",(req,res)=>{
    res.end("you are inside homepage of my website")
});

//if we want to send some status code too  write     res.status(200).end
app.get('/about',(req,res)=>{
    res.status(200).end("you are now inside about section of my website");
});

app.post('/aboutme',(req,res)=>{
    res.end("You are inside aboutme section in post request")
})

app.listen(port,()=>
{
    console.log(`the server is running at port ${port}`);
})
