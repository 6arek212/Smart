const router = require('express').Router()
const citiesController = require('../controllers/cities')
const checkAuth = require('../middleware/check-auth')


router.get('', citiesController.getCities)

router.get('/admin', checkAuth, citiesController.getAdminCities)


router.delete('/:id', checkAuth, citiesController.deleteCity)


router.post('', citiesController.addCity)


module.exports = router
