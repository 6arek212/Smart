const Request = require('../models/request')
const Device = require('../models/device')
const Customer = require('../models/customer')
const smsMessage = require('../utils/smsMessages')
const errorHandler = require('../utils/error')



exports.getRequests = (req, res, next) => {

  const currentPage = + req.query.page
  const pageSize = +req.query.pagesize
  const requestQuery = Request.find();


  if (currentPage && pageSize) {
    requestQuery.skip(pageSize * (currentPage - 1))
      .limit(pageSize)
  }

  requestQuery
    .populate('customer device company city issue')
    .sort({ createdAt: 'desc' })
    .then(result => {
      res.status(200).json({
        message: 'Requests Fetched Successfuly',
        requests: result
      })
    }).catch(err => errorHandler.serverError(err, res))
}






exports.getRequest = (req, res, next) => {
  const { requestId, customerId } = req.query


  console.log(requestId, customerId);


  Request.findOne({ '_id': requestId, 'customer': customerId })
    .populate('customer device company city issue')
    .then(result => {
      res.status(200).json({
        message: 'Request Fetched Successfuly',
        request: result
      })
    }).catch(err => errorHandler.serverError(err, res))
}



exports.getRequestByCustomerId = (req, res, next) => {
  const currentPage = + req.query.page
  const pageSize = +req.query.pagesize
  const customerId = req.query.customerId
  const requestQuery = Request.find({ customer: customerId });



  if (!customerId) {
    return errorHandler.errorMessage('Cutomer ID was not provided', '401', res)
  }




  if (currentPage && pageSize) {
    requestQuery.skip(pageSize * (currentPage - 1))
      .limit(pageSize)
  }



  requestQuery
    .select('whereAbout status title createdAt')
    .populate('company', 'name')
    .populate('city', 'name')
    .populate('device', 'model')
    .populate('issue', 'name')
    .sort({ createdAt: 'desc' })
    .then(result => {
      res.status(200).json({
        message: 'Request Fetched Successfuly',
        requests: result
      })
    }).catch(err => errorHandler.serverError(err, res))
}






exports.deleteRequest = (req, res, next) => {
  const id = req.params.requestId
  Request.findOneAndDelete({ _id: id })
    .then(result => {
      res.status(200).json({
        message: 'Request deleted Successfuly',
        requests: result
      })
    }).catch(err => errorHandler.serverError(err, res))
}




exports.addRequest =  (req, res, next) => {
  const customer = req.body.customer

  const request = new Request({
    title: req.body.title,
    company: req.body.company,
    device: req.body.device,
    customer: customer,
    issue: req.body.issue,
    otherIssue: req.body.otherIssue,
    city: req.body.city,
    whereAbout: req.body.whereAbout
  })



  request.save()
    .then(async (result) => {
      res.status(201).json({
        message: 'Request added successfuly'
      })
    })
    .catch(err => errorHandler.serverError(err, res))
}



exports.cancelRequest = (req, res, next) => {
  const { customerId, requestId } = req.body

  Request.updateOne({ '_id': requestId, 'customer': customerId }, { $set: { 'status': 'CANCEL' } })
    .then(result => {
      res.status(200).json({
        message: 'request canceled'
      })
    })
    .catch(err => errorHandler.serverError(err, res))
}


exports.updateRequest = async (req, res, next) => {
  const { requestId } = req.params
  const updateOps = []


  for (op of req.body) {
    updateOps[op.name] = op.value
  }

  console.log(updateOps, requestId);

  const request = await Request.findOne({ '_id': requestId })


  //check if the company is for the device that picked

  if (updateOps['company']) {
    if (!request)
      return errorHandler.errorMessage('request not found', 404, res)
    else {
      const devices = await Device.findOne({ '_id': request.device, 'company': op['company'] })
      if (!devices)
        return errorHandler.errorMessage('device not found', 404, res)
    }
  }

  if (updateOps['status']) {
    if (!request)
      return errorHandler.errorMessage('request not found', 404, res)
    else {
      if (request.status === updateOps['status']) {
        delete updateOps['status']
      }
    }
  }






  Request.findOneAndUpdate({ '_id': requestId }, { $set: { ...updateOps } }, { new: true ,runValidators: true})
    .populate('customer', 'phone')
    .populate('device', 'model')
    .then(request => {
      res.status(200).json({
        message: 'request updated'
      })




      switch (updateOps['status']) {
        case 'DONE':
          Customer.updateOne({ '_id': request.customer }, { $inc: { 'numOfDoneRequests': 1 } }).exec()
          break
        case 'IN-PROGRESS':
          break
        case 'CANCEL':
          Customer.updateOne({ '_id': request.customer }, { $inc: { 'numOfDoneRequests': -1 } }).exec()
          break
      }

      smsMessage.sendMessage('طلبك قد تم  ' + request.device.model + ' ' + request.title + '  شكرا لاختيارك سمارت فون', request.customer.phone)

    })
    .catch(err => errorHandler.serverError(err, res))
}



exports.updateStatus = (req, res, next) => {
  const id = req.params.id
  const status = req.body.status
  console.log(status);

  Request.findOneAndUpdate({ _id: id }, { $set: { status: status } })
    .then(result => {
      res.status(200).json({
        message: 'Request Status Updated Successfuly',
        result
      })
    }).catch(err => errorHandler.serverError(err, res))
}
