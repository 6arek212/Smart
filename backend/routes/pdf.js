const router = require('express').Router()
const pdf = require('../controllers/pdf')



router.post('', pdf.createReceipt)

router.get('/:fileName', pdf.getReceipt)

router.post('/getAll', pdf.getAllReceipts)



module.exports = router
