const {Schema, model, Types} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    thoughtText: {
      Type: String,
      required: true,
      max: 280
    },
    createdAt: {
      Type: Date,
      default: Date.now
    },
    username: {
      Type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
)

thoughtSchema.virtual('reactionCount').get(function () {
  return `${this.reactions.max}`
});

const thought = model('thought', thoughtSchema);
module.exports = thought