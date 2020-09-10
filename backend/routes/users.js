const router = require('express').Router()
const checkAuth = require('../middleware/check-auth-admin')
const usersController = require('../controllers/users')

router.post('/signup', usersController.signUp)

router.post('/login', usersController.loginUser)

router.get('',usersController.getUserData)




module.exports = router
