const router = require('express').Router()
const requestsControler = require('../controllers/requests')
const checkAuth = require('../middleware/check-auth')



router.get('', requestsControler.getRequests)

router.get('/getRequest/:id', requestsControler.getRequest)

router.get('/requestsByCustomerId', requestsControler.getRequestByCustomerId)


router.post('', requestsControler.addRequest)

router.post('/cancel', requestsControler.cancelRequest)


router.patch('/:requestId', requestsControler.updateRequest)

router.put('/:requestId', requestsControler.updateStatus)


router.delete('/:requestId', requestsControler.deleteRequest)

module.exports = router
