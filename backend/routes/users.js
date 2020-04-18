const router = require('express').Router()

const usersController=require('../controllers/users')

router.post('/signup',usersController.signUp)

router.post('/login',usersController.loginUser)





module.exports = router
