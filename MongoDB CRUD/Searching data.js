use mybase


> db.items.find()
{ "_id" : ObjectId("60b0ec0c8fd9c762ba11e770"), "Name" : "Bishal Poudel", "Address" : " Silicon Valley" }
{ "_id" : ObjectId("60b0ecce8fd9c762ba11e771"), "Name" : "Pinnell", "salary" : 10 }
{ "_id" : ObjectId("60b0ecce8fd9c762ba11e772"), "Name" : " LLpnnll", "salary" : "5" }


> db.items.find({salary : {$gt:2}})
{ "_id" : ObjectId("60b0ecce8fd9c762ba11e771"), "Name" : "Pinnell", "salary" : 10 }

> db.items.find({salary:{$lt:21}})
{ "_id" : ObjectId("60b0ecce8fd9c762ba11e771"), "Name" : "Pinnell", "salary" : 10 }

//and 
> db.items.find({salary:10})
{ "_id" : ObjectId("60b0ecce8fd9c762ba11e771"), "Name" : "Pinnell", "salary" : 10 }


// or 
//This will search for items with rating greater than 2 or less than 5
> db.items.find({$or:[{rating:{$gt:2}},{rating:{$lt:5}}]})
{ "_id" : ObjectId("60b0f6458fd9c762ba11e773"), "rating" : 4 }
{ "_id" : ObjectId("60b0f6458fd9c762ba11e774"), "rating" : 3 }
>