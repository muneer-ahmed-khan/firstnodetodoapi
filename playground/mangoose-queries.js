const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongose')
const {Todo} = require('./../server/models/todo')

var id = "6f5a455695875cd850e94b50"

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// return array of objects
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos ', JSON.stringify(todos, undefined, 2));
})

// return a single object
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ', todo._doc);
// })

// find a doc by id
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     console.log('id is not correct');
//   } else {
//   console.log('Todo By Id ', JSON.stringify(todo, undefined, 2))
// }
// })
