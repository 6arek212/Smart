let mongoose = require('mongoose');


let messageSchema = mongoose.Schema({
  text: { type: String, required: true },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('messages', messageSchema);
