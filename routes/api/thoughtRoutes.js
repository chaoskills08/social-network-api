const router = require('express').Router()

const {
  findAllThoughts, findThought, createThought, deleteThought, addReaction, deleteReaction, updateThought
} = require('../../controllers/thoughtCon')

router.route('/').get(findAllThoughts).post(createThought);

router.route('/:userId').get(findThought).put(updateThought).delete(deleteThought)

router.route('/:userId/friend/:friendId').delete(deleteReaction).put(addReaction)

module.exports = router