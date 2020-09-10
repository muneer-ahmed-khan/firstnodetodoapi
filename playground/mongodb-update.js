// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('cont connect to mango db')
  }
  console.log('Connect to mongo db now');


  var db = client.db('Todos');

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID("5f59f952bce9946c0e3cb5ce")
  }, {
    $set : {
      name: 'khan'
    },
    $inc : {
      age : 1
    }
  }, {
    returnOriginal:true
  }).then((result) => {
    console.log(result);
  })

  // client.close();



});
