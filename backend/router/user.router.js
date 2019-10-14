const express = require('express');
const router = express.Router();
const UsersController = require('./../controller/users.controller');


router.route('/signup')
  .post(UsersController.signupUser)
  .get(UsersController.getUsers);

router.route('/login')
  .post(UsersController.loginUser)

router.route('/:id')
  .get(UsersController.getUser)
  .put(UsersController.updateUser);

module.exports = router;
