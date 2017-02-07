const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = '58976f198a3c3655422ae77f';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id = '58929fcb2e0372127573726e';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found');
  } else {
    console.log(JSON.stringify(user, undefined, 2));
  }
}).catch((e) => console.log(e));
