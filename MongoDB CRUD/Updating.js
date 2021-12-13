> db.items.updateOne({Name:"Bishal Poudel"},{$set:{Salary:125}})

{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

// In first bracket we have to give selectors to select which item is to be updated and in second brackets,,
// ,we have to set the things to be updated
