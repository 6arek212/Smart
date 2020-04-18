const router = require('express').Router()
const customerController = require('../controllers/customer')
const checkAuth = require('../middleware/check-auth')



router.post('/search', customerController.search)

router.post('/signup', customerController.signup)

router.post('/login', customerController.login)



router.get('', customerController.getCustomers)

router.get('/:customerId', customerController.getCustomerDetails)

router.get('/getRequestsStatics/:customerId', customerController.getRequestsStatics)



router.patch('/:customerId', customerController.updateCustomer)

router.delete('/:customerId', customerController.deleteCustomer)


module.exports = router
