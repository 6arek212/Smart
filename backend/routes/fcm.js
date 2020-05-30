const router = require('express').Router()
const checkAuth = require('../middleware/check-auth')
const fcm = require('../utils/firebaseConfig')
const Admin = require('../models/user')
const Customer = require('../models/customer')



router.post('/updateToken', checkAuth, (req, res, next) => {
  // const token = req.body.token
  fcm.sendMessage('your request is done')
  res.json()
  return

  console.log('updating token ---------');

  if (!req.authData.isAdmin) {
    Admin.updateOne({ _id: req.authData.admin.adminId }, { token: token })
      .then(result => {
        res.status(200).json({
          message: 'token updated'
        })
      })
      .catch(err => console.log(err))
  }

  Customer.updateOne({ _id: req.authData.customer.customerId }, { token: token })
    .then(result => {
      res.status(200).json({
        message: 'token updated'
      })
    })
    .catch(err => console.log(err))

})



module.exports = router
