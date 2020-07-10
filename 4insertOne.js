//Inserting one transport in the transportation
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { type:"Bus",trans_no: 13555,trans_name: "Rail Express",availability:400  ,src:"New Delhi(NDLS)",dst:"Nashik(NK)",journey_date:"10 july 2020",start_at:10+" am",reach:23+" pm" };
  dbo.collection("transportations").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
