let mongoose = require('mongoose');


let logsSchema = mongoose.Schema({
  name: { type: String, enum: ['visit', 'new-request', 'new-customer'] },
  date: { type: Date },
  day: String,
  hour: Number,
  ip: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('logs', logsSchema);
