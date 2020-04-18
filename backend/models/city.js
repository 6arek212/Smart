const mongoose = require('mongoose')


const CitySchema = mongoose.Schema({
  name: { type: String, required: true },
  numOfCustomers: { type: Number, default: 0 },
  numOfRequests: { type: Number, default: 0 }
}, {
  timestamps: true
})
//////////////////////////////

module.exports = mongoose.model("Cities", CitySchema)
