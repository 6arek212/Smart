const mongoose = require('mongoose')

const NumOfSchema = mongoose.Schema({
  name: {
    type: String, required: true, index: true,
    unique: true, createIndexes: true
  },
  value: { type: Number, default: 0 }
})


module.exports = mongoose.model('NumOf', NumOfSchema)
