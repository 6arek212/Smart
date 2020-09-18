const Device = require('../models/device')
const errorHandler = require('../utils/error')

exports.getDevices = (req, res, next) => {
  Device.find()
    .populate('company')
    .sort({released:'desc'})
    .then(result => {
      if (!result || result.length == 0)
        errorHandler.errorMessage('No devices found', 404, res)

      res.status(201).json({
        message: 'Devices Fetched Successfuly',
        devices: result
      })
    })
    .catch(err => errorHandler.serverError)

}


exports.getDeviceByCompany = (req, res, next) => {
  const companyId = req.params.companyId

  Device.find({ company: companyId })
    .populate('company')
    .sort({released:'desc'})
    .then(devices => {
      res.status(201).json({
        message: 'Device Fetched Successfuly',
        devices
      })
    })
    .catch(err => {

    })

}

exports.addDevice = (req, res, next) => {

  const device = new Device({
    model: req.body.model.toUpperCase(),
    company: req.body.company,
    released: req.body.released
  })


  device.save()
    .then(result => {
      res.status(201).json({
        message: 'Device Added Successfuly',
        result
      })
    })
    .catch(err => errorHandler.serverError(err,res))

}
