let mongoose = require('mongoose');


let messageSchema = mongoose.Schema({
  text: { type: String, required: true, match: /^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/ },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('messages', messageSchema);
