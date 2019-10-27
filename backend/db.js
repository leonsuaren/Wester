const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/Western';
const port = 27017;

mongoose.connect(dbURL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log(`App connected on port ${port}`);
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected on ${dbURL}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose discennected through app termination');
    process.exit(0);
  });
});
