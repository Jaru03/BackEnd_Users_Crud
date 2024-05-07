const { getAll, createUser, getOneUser, removeUser, updateUser } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
  .get(getAll)
  .post(createUser)

userRouter.route("/users/:id")
  .get(getOneUser)
  .delete(removeUser)
  .put(updateUser)


module.exports = userRouter;