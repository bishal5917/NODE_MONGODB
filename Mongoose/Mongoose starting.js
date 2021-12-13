const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mybase', { useNewUrlParser:true, useUnifiedTopology:true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connected")
})

// making schemas
var pkitty=new mongoose.Schema({
    name:String
});

pkitty.methods.speak=function(){
    var greeting = "My name is" + this.name
    console.log(greeting);
}
//packing in model
var kitten =mongoose.model('PinnellKitty',pkitty)

var Pinnellkitty=new kitten({name : 'gsaygy'});
//saving in a database
Pinnellkitty.save(function(err,PinnellKitty){
    if (err) return console.error(err);
});
//finding from a database
kitten.find({name : "gsaygy"},function(err,kitten){
    if (err) return console.error(err);
    console.log(kitten)
})