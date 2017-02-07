var express = require('express');
var bodyParser = require('body-parser');

const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

//GET /todos/123231
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (todo) {
      console.log({todo});
      res.send({todo});
    } else {
      return res.status(400).send();
    }
  }).catch((e) => {
    res.status(400).send();
  })
});

app.listen(4000, () => {
  console.log('Started express server on port 4000');
});

module.exports = { app };
