const router = require('express').Router()
const repairsController = require('../controllers/repiars')
const checkAuth = require('../middleware/check-auth')

router.get('',checkAuth, repairsController.getRepairs)




router.post('',checkAuth, repairsController.addRepair)

module.exports = router
