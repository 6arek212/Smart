const router = require('express').Router()
const customerController = require('../controllers/customer')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')


router.post('/search', adminAuth, customerController.search)

router.post('/signup', customerController.signup)

router.post('/login', customerController.login)



router.get('', adminAuth, customerController.getCustomers)

router.get('/:customerId', checkAuth, customerController.getCustomerDetails)

router.get('/getRequestsStatics/:customerId', checkAuth, customerController.getRequestsStatics)



router.patch('/:customerId', checkAuth, customerController.updateCustomer)

router.delete('/:customerId', adminAuth, customerController.deleteCustomer)


module.exports = router
