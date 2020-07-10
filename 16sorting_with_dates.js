//Sorting on the basis of journey date
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Sort the result by journey date:
  var sort = { journey_date: 1 };
  dbo.collection("transportations").find().sort(sort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
