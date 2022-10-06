const router = require('express').Router()

const {
  findAllThoughts, findThought, createThought, deleteThought, addReaction, deleteReaction, updateThought
} = require('../../controllers/thoughtCon')

router.route('/').get(findAllThoughts).post(createThought);

router.route('/:thoughtId/').get(findThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(addReaction)

router.route('/:thoughtId/reactions/:_id').delete(deleteReaction)


module.exports = router