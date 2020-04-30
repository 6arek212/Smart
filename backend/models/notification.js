let mongoose = require('mongoose');


let notificationSchema = mongoose.Schema({
  text: { type: String, required: true },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('notifications', notificationSchema);
