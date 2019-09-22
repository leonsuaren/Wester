const express = require('express');
const router = express.Router();
const UsersController = require('./../controller/users.controller');


router.route('/')
  .post(UsersController.postUser)
  .get(UsersController.getUsers);

router.route('/:id')
  .get(UsersController.getUser)
  .put(UsersController.updateUser);

module.exports = router;
