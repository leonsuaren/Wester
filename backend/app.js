const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./models/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/Western')
.then(() => {
  console.log('Connected to database on port 27017');
})
.catch(() => {
  console.log('Connection failed!!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS")
  next();
});

app.post('/api/users', (req, res, next) => {
  const user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    state: req.body.state,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  user.save();
  res.status(201).json({
    message: 'User Created Successfully'
  });
});

app.get('/api/sender', (req, res, next) => {
  const sender = [
    { reciever: "hola",
      sendAmont: "1"
   }
  ];
  res.status(200).json({
    message: "Correct",
    sender: sender
  });
});


module.exports = app;
