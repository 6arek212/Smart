const router = require('express').Router()

const smsControler=require('../controllers/sms')


router.post('/',smsControler.sendMessage)


module.exports = router
