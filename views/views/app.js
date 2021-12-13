const express = require('express')
const app= express();
const nodemon=require('nodemon')
const pug=require('pug')
const path=require('path')

const port =80

//express stuffs
app.use('/static',express.static('static'))
app.use(express.urlencoded())


//settting template engine as pug
app.set('engine views','pug')


app.get('/',(req,res)=>{
    const parameters={'title': 'This is my website'}
    res.status(200).render('index.pug',parameters)
})


app.post('/', (req, res)=>{
    nm = req.body.myname
    age = req.body.age
    email = req.body.myemail

    let output = `the name of the client is ${nm}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', output)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})
app.listen(port,()=>
{
    console.log(`the server is running at port ${port}`);
})
