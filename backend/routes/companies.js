const router = require('express').Router()
const companiesController = require('../controllers/companies')
const checkAuth = require('../middleware/check-auth')

router.get('', companiesController.getComapnies)

router.post('', companiesController.addCompany)

module.exports = router
