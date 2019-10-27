const express = require('express');
const router = express.Router();
const UsersController = require('./../controller/users.controller');
const checkAuth = require('./../middleware/check-auth');


router.route('/signup')
  .post(UsersController.signupUser)
  .get(UsersController.getUsers);

router.route('/login')
  .post(UsersController.loginUser)

router.route('/')
  .get(UsersController.getUsers)

  router.route('/:id')
  .put(UsersController.updateUser);

module.exports = router;
