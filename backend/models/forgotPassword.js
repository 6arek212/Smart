const mongoose = require('mongoose')


const ForgotPasswordSchema = mongoose.Schema({
  isDone: { type: Boolean, default: false },
  phone: { type: String, require: true }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('ForgotPassword', ForgotPasswordSchema)

