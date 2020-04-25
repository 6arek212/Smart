const router = require('express').Router()
const repairsController = require('../controllers/repiars')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')

router.get('', checkAuth, repairsController.getRepairs)




router.post('', adminAuth, repairsController.addRepair)

module.exports = router
