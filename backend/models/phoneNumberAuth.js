const mongoose = require('mongoose')

const phoneNumberAuthSchema = mongoose.Schema({
  phoneNumber: {
    type: String, required: true, match: /^\+?\d+$/, trim: true
  },
  countryCode: {
    type: String, required: true, match: /^\+?\d+$/, trim: true
  },
  code: { type: String, required: true },
  isAuthorized: { type: Boolean, default: false }
}, {
  timestamps: true
})


module.exports = mongoose.model('phoneNumberAuth', phoneNumberAuthSchema)
