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


  // db.collection('Todos').find({
  //   _id: new ObjectID('5f59f7c553dc1f6a9229c132')
  //  }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'muneer'}).count().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  })

  // client.close();



});
