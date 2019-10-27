const express = require('express');
const bodyParser = require('body-parser');
require('./db');
const users = require('./router/user.router');
const beneficiary = require('./router/beneficiary.router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/api/users', users);
app.use('/api/beneficiary', beneficiary);


module.exports = app;
