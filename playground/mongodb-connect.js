// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



// MongoClient.connect('mongodb://localhost:27017', (err, client) => {
//   if (err) {
//     return console.log('cont connect to mango db')
//   }
//   console.log('Connect to mongo db now');
//
//   // var db = client.db('Todos');
//   // db.collection('Users').insertOne({
//   //   name: 'khan',
//   //   age: 25,
//   //   location: 'Uae'
//   // }, (err, result) => {
//   //   if (err) {
//   //     return console.log('unable to insert todo', err);
//   //   }
//   //
//   //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//   //   client.close();
//   // })
//
//
// });
