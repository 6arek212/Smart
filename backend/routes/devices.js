const router = require('express').Router()
const devicesController = require('../controllers/devices')
const checkAuth = require('../middleware/check-auth')
const adminAuth = require('../middleware/check-auth-admin')
const multer = require('multer')

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'

}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype]
    let error = new Error("Invalid mime type")
    if (isValid) {
      error = null
    }
    cb(error, "backend/images/devices")
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = MIME_TYPE_MAP[file.mimetype]
    cb(null, name + '-' + Date.now() + '.' + ext)
  }
})


router.get('', checkAuth, devicesController.getDevices)

router.get('/:companyId', checkAuth, devicesController.getDeviceByCompany)

router.post('', adminAuth, multer({ storage: storage }).single("image"), devicesController.addDevice)


router.patch('/:id', adminAuth, multer({ storage: storage }).single("image"), devicesController.updateDevice)



module.exports = router
