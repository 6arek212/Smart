const router = require('express').Router()
const devicesController = require('../controllers/devices')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')

router.get('', checkAuth, devicesController.getDevices)

router.get('/:companyId', checkAuth, devicesController.getDeviceByCompany)

router.post('', adminAuth, devicesController.addDevice)

module.exports = router
