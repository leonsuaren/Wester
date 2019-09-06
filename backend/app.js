const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
