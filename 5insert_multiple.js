//Inserting many transports in the database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { type:"Train",trans_no: 13609,trans_name: "Duranto Express",availability:400  ,src:"New Delhi(NDLS)",dst:"Nashik(NK)",journey_date:"10 july 2020",reach_on:"10 july 2020",start_at:"10:00:00am",reach:"23:00:00 pm" },
    { type:"Train" ,trans_no: 13608,trans_name:"Shatabdi Express",availability:200 ,src:"New Delhi(NDLS)",dst:"Nashik(NK)",journey_date:"10 july 2020",reach_on:"11 july 2020",start_at:"10:00:00am",reach:"00:00:00 am" },
    { type:"Bus",trans_no: 13610,trans_name: "Road Express",availability:20  ,src:"New Delhi(NDLS)",dst:"Nashik(NK)",journey_date:"11 july 2020",reach_on:"11 july 2020",start_at:"10:00:00am",reach:"18:00:00 pm" },
    { type:"Bus",trans_no: 13611,trans_name: " Roadways",availability:40 ,src:"New Delhi(NDLS)",dst:"Nashik(NK)",journey_date:"11 july 2020",reach_on:"11 july 2020",start_at:"10:00:00am",reach:"22:00:00 pm" }
];
dbo.collection("transportations").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of authrities inserted :" + res.insertedCount);
    db.close();
  });
});
