const {Schema, model, Types} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
      minLength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true,
      default: 'Anonymous'
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return `${this.reactions.maxLength}`
});

const thought = model('thought', thoughtSchema);
module.exports = thought