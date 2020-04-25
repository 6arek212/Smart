const Customer = require('../models/customer')
const ForgotPassword = require('../models/forgotPassword')
const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/error')
const sms = require('../utils/smsMessages')

exports.sendPasswordMessage = async (req, res, next) => {
  const code = Math.floor(Math.random() * 90000) + 10000
  const phone = req.body.phone
  const date = new Date()
  date.setDate(date.getDate() + 1)


  const customer = await Customer.findOne({ 'phone': phone }).exec()
  if (!customer)
    return res.status(401).json({
      message: 'The phone number is not in use'
    })

  const fg = new ForgotPassword({
    phone: phone,
    code,
    expireDate: date
  })

  fg.save().then(result => {
    sms.sendMessage(code + 'رقمك السري ', phone)
    res.status(201).json({
      message: 'Forgot password request was added successfuly',
      code,
      forgotPasswordId: result._id,
      expireDate: date
    })
  }).catch(err => errorHandler.serverError(err, res))
}


exports.sendMessageAgain = async (req, res, next) => {
  const { forgotPasswordId } = req.body

  const request = await ForgotPassword.findOne({ '_id': forgotPasswordId }).exec()
  if (!request)
    return res.status(401).json({
      message: 'Request not found'
    })

  sms.sendMessage(request.code + 'رقمك السري ', request.phone)
}


exports.verifyRequest = (req, res, next) => {
  const { code, forgotPasswordId } = req.body

  ForgotPassword.findOne({ '_id': forgotPasswordId })
    .then(doc => {
      const date = new Date()


      if (date > doc.expireDate) {
        return res.status(401).json({
          message: 'This request is expired'
        })
      }

      if (code !== doc.code)
        return res.status(401).json({
          message: 'Code is incorrect'
        })

      ForgotPassword.updateOne({ '_id': doc._id }, { 'isVerfied': true }).exec()
      return res.status(200).json({
        message: 'Verified successfuly'
      })

    }).catch(err => errorHandler.serverError(err, res))

}


exports.changePassword = async (req, res, next) => {
  const { phone, forgotPasswordId, password } = req.body

  const forgotPasswordRequest = await ForgotPassword.findOne({ '_id': forgotPasswordId }).exec()
  const date = new Date()

  if (!forgotPasswordRequest)
    return res.status(404).json({
      message: 'Forgot password request not found'
    })


  if (date > forgotPasswordRequest.expireDate) {
    return res.status(401).json({
      message: 'This request is expired'
    })
  }


  const customer = await Customer.findOne({ 'phone': phone }).exec()

  if (!customer)
    return res.status(404).json({
      message: 'Customer not found'
    })


  const hashedPassword = await bcrypt.hash(password, 10)

  if (!hashedPassword)
    return res.status(500).json({
      message: 'An error occurred'
    })


  customer.updateOne({ 'password': hashedPassword }, { runValidators: true }).then(result => {
    sms.sendMessage('تم تعديل كلمة المرور', phone)
    res.status(200).json({
      message: 'Password has been changed successfuly'
    })
  })
    .catch(err => errorHandler.serverError(err, res))

}
