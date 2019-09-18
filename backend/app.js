const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./router/user.router');

const app = express();

mongoose.connect('mongodb://localhost:27017/Western', { useNewUrlParser: true })
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

app.use('/api/users', users);


module.exports = app;
