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

  //delete many
  db.collection('Users').deleteMany({name:'khan'}).then((result) =>{
    console.log(result);
  })

  // deleteone

  // db.collection('Todos').deleteOne({text:'walk the dog'}).then((result) => {
  //   console.log(result);
  // })

  // findOneDelete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // })

  // client.close();



});
