const mongoose = require('mongoose')


const CompanySchema = mongoose.Schema({
  name: { type: String, required: true },
  numOfRequests: { type: Number, default: 0 },
  numOfRepairs: { type: Number, default: 0 },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Company', CompanySchema)
