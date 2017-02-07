const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });

 // Todo.findOneAndRemove
 // Todo.findByIdAndRemove

 Todo.findOneAndRemove({_id: '589a3487468a3330c8b628ca'}).then((todo) => {

 });


 Todo.findByIdAndRemove('589a3487468a3330c8b628ca').then((todo) => {
   console.log(todo);
 });
