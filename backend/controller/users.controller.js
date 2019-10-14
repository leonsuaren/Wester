const mongoose = require('mongoose');
const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signupUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      country: req.body.country,
      state: req.body.state,
      email: req.body.email,
      username: req.body.username,
      password: hash
    });
    user.save().then(result => {
      res.status(201).json({
        message: 'User Created Successfully',
        result: result
      });
    })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });
};

exports.loginUser = (req, res, next) => {
  let fetchUser
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Auth Failed1'
        })
      }
      fetchUser = user;
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Auth Failed2'
        })
      }
      const token = jwt.sign({ email: fetchUser.email, userId: fetchUser._id }, 'secrete_this_shoud_be_longer', { expiresIn: '1h' })
      res.status(200).json({
        token: token
      })
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Auth Failed3'
      })
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
  User.findById(req.body.id)
    .then(user => {
      res.status(200).json({
        message: 'User fetch successfully!',
        user: user
      })
    });
}

exports.updateUser = (req, res, next) => {
  const user = new User({
    _id: req.body._id,
    name: req.body.name,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    state: req.body.state,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    street: req.body.street,
    city: req.body.city,
    zipeCode: req.body.zipeCode
  });
  User.updateOne({ _id: req.body._id }, user)
    .then(result => {
      res.status(200).json({
        message: 'User updated successfully!',
        user
      });
      console.log(user);
    });
}
