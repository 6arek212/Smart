const router = require('express').Router()
const messagesControler = require('../controllers/messages')
const adminAuth = require('../middleware/check-auth-admin')
const checkAuth = require('../middleware/check-auth')

router.get('', checkAuth, messagesControler.getMessages)

router.post('', messagesControler.addMessage)

router.delete('', adminAuth, messagesControler.deleteMessage)


module.exports = router
