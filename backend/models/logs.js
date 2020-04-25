let mongoose = require('mongoose');


// const innerSchema = mongoose.Schema({
//   day: String,
//   hour: Number
// },
// {
//   timestamps: true
// })

// let logsSchema = mongoose.Schema({
//   name: { type: String, enum: ['visit', 'new-request', 'new-customer'] },
//   series: { type: [innerSchema], default: [] }
// })

let logsSchema = mongoose.Schema({
  name: { type: String, enum: ['visit', 'new-request', 'new-customer'] },
  date: { type: Date },
  day: String,
  hour: Number
},
  {
    timestamps: true
  })

module.exports = mongoose.model('logs', logsSchema);
