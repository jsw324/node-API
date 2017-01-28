const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //remove many jason walkow - delete another document by id
  // db.collection('Users').deleteMany({name: 'Jason Walkow'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteOne({
      _id: new ObjectID('587d3fb290bb195c33299309')
    }).then((result) => {
      console.log(result);
  });

  //db.close();
});
