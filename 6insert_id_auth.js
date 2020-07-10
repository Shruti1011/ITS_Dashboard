//Inserting multiple authorities with unique id values
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  var myobj = [
    { _id: 150, first_name: 'Kartik ',last_name:"Mehta",email:"kartik@gmail.com",id_cardno:123456,phno:9874561230},
    { _id: 151, first_name: 'Shruti ',last_name:"Shruti",email:"shruti@gmail.com",id_cardno:456232,phno:9012354679},
    { _id: 149, first_name: 'Deeva ',last_name:"Gupta",email:"deeva@gmail.com",id_cardno:789644,phno:9754862180},
    { _id: 148, first_name: 'Laksh ',last_name:"Kalra",email:"laksh@gmail.com",id_cardno:654321,phno:9587562105}
  ];
  dbo.collection("Authority").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of authority inserted: "+res.insertedCount);
    console.log(res);
    db.close();
  });
});
