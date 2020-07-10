//Update the values of authority
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = {first_name: "vami" };
  var newvalues = { $set: { first_name: "Deeva",last_name:" Gupta" }};
  dbo.collection("Authority").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
