var mongoose = require('mongoose')


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var user = new User({
//   email: 'muner'
// })
//
// user.save().then((doc) => {
//   console.log(doc._doc);
// }, (err) => {
//   console.log('unable to do', err);
// })

module.exports = { User }
