const { Schema, model } = require('mongoose');
const Thoughts = require('./thoughts')

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: 'Username is Required'
    },

    email: {
      type: String,
      required: 'Email is Required',
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },

    thoughts:   
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
          }
    ],

    friends:[
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }] 

  },
  // {
  //   toJSON: {
  //     virtuals: true
  //   },
  //   id: false
  // }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.lenght;
});

const User = model('User', UserSchema);

module.exports = User;
