const router = require('express').Router()

const {
  findAllUsers, findUser, createUser, deleteUser, addFriend, deleteFriend, updateUser
} = require('../../controllers/userCon')

router.route('/').get(findAllUsers).post(createUser);

router.route('/:userId').get(findUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friend/:friendId').delete(deleteFriend).put(addFriend)

module.exports = router