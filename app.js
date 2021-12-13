const express = require('express')
const app= express();
const nodemon=require('nodemon')
const pug=require('pug')
const fs=require('fs')

const port =80

//express stuffs
app.use('/static',express.static('static'))


//settting template engine as pug
app.set('engine view','pug')
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    const parameters={'title': 'This is my website'}
    res.status(200).render('index.pug',parameters)
})
app.post('/',(req,res)=>{
    nm=req.body.myname
    email=req.body.myemail
    age=req.body.age
    let outputrec=`name=${nm}
                    email=${email}
                    age=${age}`
   fs.writeFileSync('informationTAKEN.txt',)
    const para={'notify':'The form has been submitted successfully'}
    res.render('index.pug','para')
})
app.listen(port,()=>
{
    console.log(`the server is running at port ${port}`);
})
