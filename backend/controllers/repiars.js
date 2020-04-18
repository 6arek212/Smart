const Repair = require('../models/repair')


exports.getRepairs = (req, res, next) => {
  Repair.find()
    .populate('customer')
    .populate('device')
    .then(result => {
      res.status(201).json({
        message: 'Repair/s Fetched Successfuly',
        result
      })
    })
    .catch(err => {

    })

}

exports.addRepair = (req, res, next) => {
  const customer = req.body.customer
  const devices = req.body.devices

  const repiars = []



  devices.forEach(dev => {
    dev.customer = customer

    repiars.push(new Repair({
      notes: dev.notes,
      price: dev.price,
      customer: customer,
      device: dev.device
    }))
  });


  Repair.insertMany(repiars)
    .then(result => {
      res.status(201).json({
        message: 'Repair/s Created Successfuly',
        result
      })
    })
    .catch(err => {

    })

}
