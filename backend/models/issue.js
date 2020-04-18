const mongoose = require('mongoose')


const IssueSchema = mongoose.Schema({
  name: { type: String, match: /^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/},
  count: { type: Number, default: 0 },
  numOfRequests: { type: Number, default: 0 },
  numOfRepairs: { type: Number, default: 0 },
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Issues', IssueSchema)
