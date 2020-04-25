const router = require('express').Router()
const forgotPasswordControler = require('../controllers/forgotPassword')
const adminAuth = require('../middleware/check-auth-admin')

router.post('', forgotPasswordControler.sendPasswordMessage)

router.post('/verify', forgotPasswordControler.verifyRequest)

router.post('/again', forgotPasswordControler.sendMessageAgain)


router.patch('', forgotPasswordControler.changePassword)


module.exports = router
