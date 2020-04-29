const router = require('express').Router()
const adminAuth = require('../middleware/check-auth-admin')
const smsControler = require('../controllers/sms')


router.post('/', adminAuth, smsControler.sendMessage)
//

module.exports = router
