const mongoose = require('mongoose');
const User = require('../models/users.model');

exports.postUser = (req, res, next) => {
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
  console.log(user);
  user.save();
  res.status(201).json({
    message: 'User Created Successfully'
  });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then(document => {
      res.status(200).json({
        message: "Users fetched Successfully!",
        users: document
      });
    });
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    res.status(200).json({
      message: 'User fetch successfully!',
      user: user
    })
  });
}
