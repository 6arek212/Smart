const router = require('express').Router()
const requestsControler = require('../controllers/requests')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')



router.post('', adminAuth, requestsControler.getRequests)

router.get('/getRequest/:id', checkAuth, requestsControler.getRequest)

router.get('/requestsByCustomerId', requestsControler.getRequestByCustomerId)


router.put('', checkAuth, requestsControler.addRequest)

router.post('/cancel', checkAuth, requestsControler.cancelRequest)


router.patch('/:requestId', checkAuth, requestsControler.updateRequest)

router.put('/:requestId', checkAuth, requestsControler.updateStatus)


router.delete('/:requestId', adminAuth, requestsControler.deleteRequest)

module.exports = router
