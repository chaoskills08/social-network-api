const router = require('express').Router()

const {
  getUsers,
  getUser,
  makeUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require