//Query with a specific value
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Return only the documents where the journey date starts with "10" and type "Bus":*/
  var query = { journey_date:/^10/,type:/^Bus/};
  dbo.collection("transportations").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
