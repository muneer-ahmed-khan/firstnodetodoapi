var mongoose = require('mongoose')

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var todo = new Todo({
//   text: 'do anything',
//   completed: false
// })
//
// todo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unbale tosave', e);
// })


module.exports = { Todo }
