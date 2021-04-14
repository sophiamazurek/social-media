const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction')

const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Thoughts are Required',
      minlength: 1,
      maxlenght: 280
    },

    createdAt: {
      type: Date,
      default: Date.now
    },

    username: {
        type: String,
        required: 'Username is required'
    },

    reactions: 
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'reactionSchema' 
        }
    ] 
    
  },
   // {
  //   toJSON: {
  //     virtuals: true
  //   },
  //   id: false
  // }
);

ThoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.lenght;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;
