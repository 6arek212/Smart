const router = require('express').Router()
const citiesController = require('../controllers/cities')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')


router.get('', citiesController.getCities)

router.get('/admin', adminAuth, citiesController.getAdminCities)


router.delete('/:id', adminAuth, checkAuth, citiesController.deleteCity)


router.post('', adminAuth, citiesController.addCity)


module.exports = router
