const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  optimumid: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Form', FormSchema);