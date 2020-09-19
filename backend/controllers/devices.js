const Device = require('../models/device')
const errorHandler = require('../utils/error')
const fs = require('fs')
const path = require('path')

exports.getDevices = (req, res, next) => {
  Device.find()
    .populate('company')
    .sort({ released: 'desc' })
    .then(result => {
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
    .sort({ released: 'desc' })
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
    released: req.body.released,
    image: req.file.filename
  })


  device.save()
    .then(result => {
      res.status(201).json({
        message: 'Device Added Successfuly',
        result
      })
    })
    .catch(err => errorHandler.serverError(err, res))

}



exports.updateDevice = (req, res, next) => {
  const id = req.params.id
  const device = {
    model: req.body.model.toUpperCase(),
    company: req.body.company,
    released: req.body.released,
  }

  if (req.file) {
    device.image = req.file.filename
  }

  console.log(device);

  Device.findOneAndUpdate({ _id: id }, device)
    .then(result => {
      if (req.file) {
        const p = path.join(__dirname,'../', 'images/', 'devices/')
        console.log(p+result.image);
        fs.unlink(p+result.image,(st)=>{
          console.log('deleted file',st);
        })
      }

      res.status(200).json({ message: 'updated successfully' })
    })
    .catch(err => {
      res.status(500).json({ message: 'error occured' })
      console.log(err);
    })



}
