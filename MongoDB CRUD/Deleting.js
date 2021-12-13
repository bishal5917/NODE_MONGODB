show dbs

use mybase

db.items.deleteOne({rating:4})
//This wil delete the item will rating 4.In case of multi document match it will delete the first entry

db.items.deleteMany({rating:5})
//it will delete all the items with rating 5
