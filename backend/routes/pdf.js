const router = require('express').Router()
const pdf = require('../controllers/pdf')



router.post('', pdf.getReceipt)





module.exports = router
