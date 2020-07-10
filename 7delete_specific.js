//Deleting a specific data from transportaions
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Delete the first transportation with the name "Rajdhani Express":*/
  var myquery = { trans_name:'Rajdhani Express' };
  dbo.collection("transportations").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

