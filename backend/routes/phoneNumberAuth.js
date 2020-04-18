const router = require('express').Router()
const PhoneAuth = require('../models/phoneNumberAuth')
const Customer = require('../models/customer')

const accountSid = 'AC8a7c103d2a3bec243cda5ac32542256a';
const authToken = '29b89183b591fd4998ca876256f60dbe';
const client = require('twilio')(accountSid, authToken);
const errorHandler = require('../utils/error')

router.get('', async (req, res, next) => {
  PhoneAuth.find()
    .then(docs => {
      res.status(200).json(docs)
    })
})





router.post('', async (req, res, next) => {
  const code = Math.floor(Math.random() * 90000) + 10000
  const phoneNumber = req.body.phoneNumber

  const auth = new PhoneAuth({
    phoneNumber: phoneNumber,
    countryCode: '+972',
    code: code
  })


  const customer = await Customer.findOne({ 'phone': phoneNumber }).exec()
  if (customer)
    return errorHandler.errorMessage('Phone number exsits', 404, res)



  auth.save().then(result => {

    client.messages
      .create({
        body: code + ' مرحبا بك في سمارت فون باقة رقمك السري',
        from: '+12029914931',
        to: '+9720525145565'
      })
      .then(message => console.log('Message sent'))
      .catch(err => { console.log(err); }
      )

    res.status(201).json({
      message: 'Added phone number to authenticate',
      _id: result._id
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Somthing went wrong while Adding phone number to authenticate'
    })
  })
})


router.delete('', async (req, res, next) => {
  const { _id } = req.body
  PhoneAuth.findOneAndRemove({ _id: _id }).then(result => {
    res.status(200).json({
      message: 'Phone auth record deleted'
    })
  })
})





router.post('/verifyNumber', async (req, res, next) => {
  const { code, _id } = req.body
  console.log(code, _id);
  PhoneAuth.findOne({ _id: _id })
    .then(doc => {
      if (!doc)
        return res.status(404).json({
          message: 'Auth record not found'
        })

      if (doc.code === code) {
        PhoneAuth.findOneAndUpdate({ _id: _id }, { 'isAuthorized': true }).exec()
        return res.status(200).json({
          message: 'Auth successful'
        })
      }
      else {
        res.status(401).json({
          message: 'Wrong code try again'
        })
      }
    })

})




module.exports = router
