const router = require('express').Router()

const {
  getUsers,
  getUser,
  makeUser,
  deleteUser,
  addFriend,
  removeFriend
} = require