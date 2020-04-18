const router = require('express').Router()
const issuesControler = require('../controllers/issues')
const checkAuth = require('../middleware/check-auth')

router.get('', issuesControler.getIssues)

router.post('', issuesControler.addIssue)

module.exports = router
