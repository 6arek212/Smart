const router = require('express').Router()
const issuesControler = require('../controllers/issues')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')

router.get('', checkAuth, issuesControler.getIssues)

router.post('', adminAuth, issuesControler.addIssue)

module.exports = router
