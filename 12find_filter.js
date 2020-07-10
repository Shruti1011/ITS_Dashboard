//Filter on the basis of type of transport
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Return only the documents with the type "Bus":*/
  var query = { type: /^Bus/ };
  dbo.collection("transportations").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
