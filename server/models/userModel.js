const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    optimumid: {
      type: String,
      required: [true, 'Please input email'],
    },
    text: {
      type: String,
      required: [true, 'Please input password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
