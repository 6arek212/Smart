const router = require('express').Router()
const checkAuth = require('../middleware/check-auth')
const usersController = require('../controllers/users')

router.post('/signup',checkAuth, usersController.signUp)

router.post('/login', usersController.loginUser)





module.exports = router
