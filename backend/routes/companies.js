const router = require('express').Router()
const companiesController = require('../controllers/companies')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')

router.get('',checkAuth, companiesController.getComapnies)

router.post('',adminAuth, companiesController.addCompany)

module.exports = router
