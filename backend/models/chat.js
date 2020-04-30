let mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  text: { type: String, required: true },
  sender: { true: String, required: true }
},
  {
    timestamps: true
  })



let chatSchema = mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "customers", required: true },
  messages: [messageSchema]
},
  {
    timestamps: true
  })

module.exports = mongoose.model('chats', chatSchema);
