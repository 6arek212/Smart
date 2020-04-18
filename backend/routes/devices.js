const router = require('express').Router()
const devicesController = require('../controllers/devices')
const checkAuth = require('../middleware/check-auth')

router.get('', devicesController.getDevices)

router.get('/:companyId', devicesController.getDeviceByCompany)

router.post('', devicesController.addDevice)

module.exports = router
