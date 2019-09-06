const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS")
  next();
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
