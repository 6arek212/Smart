const mongoose = require('mongoose')


const DeviceSchema = mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  model: { type: String, required: true, unique: true, index: true, createIndexes: true, match: /^[a-zA-Z\s]*$/ },
  released: { type: Date, required: true },
  numOfRequests: { type: Number, default: 0 },
  numOfRepairs: { type: Number, default: 0 },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Devices', DeviceSchema)

