const mongoose = require('mongoose')


const seriesRecord = mongoose.Schema({
  day: {
    type: Number, required: true
  },
  month: {
    type: Number, required: true
  },
  year: {
    type: Number, required: true
  },
  name: { type: String, required: true },
  value: { type: Number, default: 0 }
}, {
  timestamps: true
})



const statisticSchema = mongoose.Schema({
  name: { type: String, required: true },
  series: { type: [seriesRecord], default: [] },
}, {
  timestamps: true
})



module.exports = mongoose.model('statistic', statisticSchema)
