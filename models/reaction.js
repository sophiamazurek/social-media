const { Schema, model } = require('mongoose');

const ReactionsSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: 'This is Required',
      maxlenght: 280
    },

    username: {
        type: String,
        required: 'Username is required'
    },

    createdAt: {
        type: Date,
        default: Date.now
      },
    
  },
   // {
  //   toJSON: {
  //     virtuals: true
  //   },
  //   id: false
  // }
);



const Reactions = model('Reaction', ReactionsSchema);

module.exports = Reactions;
