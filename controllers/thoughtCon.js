const {Thought, thought} = require('../models');

  module.exports = {
    findAllThoughts(req, res) {
      Thought.findAll()
      .then((thoughts) => res.json(thoughts))
        if (err) throw err;
        return res.status(404).json(err)
    },
  
    findThought(req, res) {
      Thought.findOne({_id: req.params.thoughtId})
      .select('-__v')
      .then((thought) =>
        !thought ? res.status(404).json({message: 'No thought associated with that ID'})
        : res.json(thought));
    }, 
  
    createThought(req, res) {
      Thought.create(req.body)
      .then((thought) => res.json(thought))
        if (err) throw err;
        return res.status(404).json(err);
    },
  
    deleteThought(req, res) {
      Thought.findOneAndDelete({
        _id: req.params.thoughtId
      }).then((thought) => 
        !thought ? res.status(404).json({message: 'No thought associated with that ID'})
        : Thought.deleteOne({_id: {$in: Thought.thoughts}}
      )).then(() =>
        res.json({message: 'Thought deleted'}))
        .catch((err) => res.status(500).json(err));
    },
  
    addReaction(req, res) {
      Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$addToSet: {reactions: req.body}},
        {runValidators: true,
        new: true}
      ).then((thought) =>
      !thought ? res.status(404).json({message: 'No thought associated with that ID'})
      :res.json(thought))
      .catch((err) => res.status(500).json(err));
    },
  
    deleteReaction(req, res) {
      Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: {_id: req.params._id}}},
        {runValidators: true,
        new: true}
      ).then((thought) => 
      !thought ? res.status(404).json({message: "No thought associated with that ID"})
      :res.json(thought))
      .catch((err) => res.status(500).json(err));
    },
  
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$set: req.body},
        {runValidators: true,
        new: true}
      ).then((thought) => 
      !thought ? res.status(404).json({message: 'No thought associated with that ID'})
      :res.json(thought))
      .catch((err) => res.status(500).json(err))
    }
  }