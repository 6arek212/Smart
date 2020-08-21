const router = require('express').Router()
const checkAuth = require('../middleware/check-auth')
const fcm = require('../utils/firebaseConfig')
const Admin = require('../models/user')
const Customer = require('../models/customer')


router.post('/test', (req, res, next) => {
  fcm.sendMessage('Request update', 'your request is done')
  res.send()
})


router.post('/updateToken', checkAuth, (req, res, next) => {

  const token = req.query.token

  console.log('updating token ---------', token);

  if (req.authData.isAdmin) {
    return Admin.updateOne({ _id: req.authData.admin.adminId }, { token: token })
      .then(result => {
        res.status(200).json({
          message: 'token updated'
        })
      })
      .catch(err => console.log(err))
  }


  console.log('customer id ',req.authData.customer.customerId );

  Customer.updateOne({ _id: req.authData.customer.customerId }, { token: token })
    .then(result => {
      console.log(result);

      res.status(200).json({
        message: 'token updated'
      })
    })
    .catch(err => console.log(err))

})



module.exports = router
