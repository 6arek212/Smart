const router = require('express').Router()
const chatsControler = require('../controllers/chats')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')


router.get('', chatsControler.getMessages)


//router.delete('/:id', checkAuth, citiesController.deleteCity)


router.post('', chatsControler.sendMessage)


module.exports = router
