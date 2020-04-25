const mongoose = require('mongoose')


const ForgotPasswordSchema = mongoose.Schema({
  isVerfied: { type: Boolean, default: false },
  phone: { type: String, require: true },
  code: { type: String },
  expireDate: { type: Date, required: true }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('ForgotPassword', ForgotPasswordSchema)

