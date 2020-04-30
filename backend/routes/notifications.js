const router = require('express').Router()
const notificationsControler = require('../controllers/notifications')
const adminAuth = require('../middleware/check-auth-admin')
const checkAuth = require('../middleware/check-auth')

router.get('', checkAuth, notificationsControler.getNotifications)

router.post('', notificationsControler.addNotification)

router.delete('', adminAuth, notificationsControler.deleteNotification)


module.exports = router
