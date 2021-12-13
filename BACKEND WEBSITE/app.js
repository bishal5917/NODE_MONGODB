const express = require('express')
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose')
// const bodyparser=require('body-parser')
const port = 80
const app = express()

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
//connecting mongoose
mongoose.connect('mongodb://localhost/contactform', { useNewUrlParser: true, useUnifiedTopology: true })
//Making schema
var formschema=new mongoose.Schema({
    myname : String,
    add : String,
    age : String
});

var conmodel = mongoose.model('conkitty',formschema);

app.get('/', (req, res) => {
    const options = {}
    res.status(200).render('home.pug', options)
})
app.get('/contact', (req, res) => {
    const options = {}
    res.status(200).render('contact.pug', options)
})
app.post('/contact', (req, res) => {
    // let nm = req.body.myname
    // let ad = req.body.add
    //similar for others
    // let writethis = `name is ${nm}
                //    address is ${ad}`
    // fs.writeFileSync('written.txt', writethis)
    // const options = { 'message': 'form submitted' }
    // res.render('contact.pug', options)
    var subdata=new conmodel(req.body);
    subdata.save().then(()=>{
        res.send("Successfully saved to the database")
    }).catch(()=>{
        res.status(400).send("some error occured")
    });

})

app.listen(port, () => {
    console.log(`The application is running on port ${port}`)
})