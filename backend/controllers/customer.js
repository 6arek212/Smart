const Customer = require('../models/customer')
const NumOf = require('../models/numOf')
const ForgotPassword = require('../models/forgotPassword')
const smsMessage = require('../utils/smsMessages')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/error')










exports.search = async (req, res, next) => {
  const name = req.body.search
  console.log(req.body);

  const currentPage = + req.query.page
  const pageSize = +req.query.pagesize
  const customerQuery = Customer.find();




  const totalCustomers = (await NumOf.findOne({ 'name': 'Customers' })).value
  console.log('---------', currentPage, pageSize, totalCustomers);


  if (currentPage && pageSize) {
    customerQuery.skip(pageSize * (currentPage - 1))
      .limit(pageSize)
  }




  if (!name) {
    return (customerQuery.find()
      .populate('city', 'name')
      .then(result => {
        return res.status(201).json({
          message: 'Customers Fetched Successfuly',
          customers: result,
          totalCustomers
        })
      })
      .catch(err => {
        errorHandler.serverError('err', res)
      }))
  }
  const searchString = name.trim()


  let fetchedCustomers

  const find = customerQuery.find({

    $or: [
      {
        "$expr": {
          "$regexMatch": {
            "input": { "$concat": ["$firstName", " ", "$lastName"] },
            "regex": searchString,  //Your text search here
            "options": "i"
          }
        }

      },
      { 'phone': { $regex: "^" + searchString } }
    ]
  })

  find
    .populate('city', 'name')
    .then(result => {
      fetchedCustomers = result
      return customerQuery.count()
    })
    .then(count => {
      res.status(201).json({
        message: 'Customers Fetched By Name Successfuly',
        customers: fetchedCustomers,
        totalCustomers: count
      })
    })
    .catch(err => {
      errorHandler.serverError('err', res)
    })
}


exports.getCustomerDetails = (req, res, next) => {
  const customerId = req.params.customerId

  Customer.findOne({ '_id': customerId })
    .select('firstName lastName phone city numOfRequests numOfDoneRequests')
    .populate('city', 'name')
    .then(customer => {
      if (!customer)
        return res.status(404).json({
          message: 'Customer not found'
        })

      res.status(200).json({
        message: ' Fetched customer successfuly',
        customer
      })
    })
}





exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hashedPassword => {
    //req.body.countryCode
    const customer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      countryCode: '+972',
      gender: req.body.gender,
      password: hashedPassword,
      city: req.body.city
    })


    customer.save()
      .then(result => {

        const data = {
          ...result._doc,
          password: null
        }
        delete data.password

        const token = jwt.sign({ customerId: result._id, phone: result.phone }, 'secret', { expiresIn: '24h' })

        res.status(201).json({
          message: 'Customer Added Successfuly',
          expiresIn: 24 * 60 * 60,
          token,
          user: {
            firstName: result.firstName,
            lastName: result.lastName,
            _id: result._id
          }
        })

        smsMessage.sendMessage('اهلا وسهلا بك في سمارت فون', req.body.phone)
      })
      .catch(err => errorHandler.errorMessage('Check customer fields', 401, res, err))

  }).catch(err => errorHandler.errorMessage('Something went wrong while adding customer', 500, res, err))
}


exports.getCustomers = (req, res, next) => {
  Customer.find()
    .then(docs => {
      res.status(200).json({
        message: 'fetched cutomers',
        customers: docs
      })
    })
}



exports.getRequestsStatics = (req, res, next) => {
  const customerId = req.params.customerId
  Customer.findOne({ '_id': customerId })
    .then(customer => {
      if (!customer) {
        errorHandler.errorMessage('Customer not found', 404, res)
      }
      res.status(200).json({
        message: 'Fetched customer requests data successfuly',
        data: {
          numOfRequests: customer.numOfRequests,
          numOfDoneRequests: customer.numOfDoneRequests
        }
      })
    }).catch(err => errorHandler.serverError(err, res))
}




exports.login = (req, res, next) => {
  let fetchedUser

  Customer.findOne({ phone: req.body.phone })
    .then(user => {
      if (!user) {
        return errorHandler.errorMessage('Auth failed', 401, res)
      }
      fetchedUser = user

      bcrypt.compare(req.body.password, user.password).then(result => {

        if (!result) {
          return errorHandler.errorMessage('Auth failed', 401, res)
        }

        const token = jwt.sign({ phone: fetchedUser.phone, customerId: fetchedUser._id }, process.env.JWT_KEY, { expiresIn: '24h' })
        res.status(200).json({
          message: 'Auth Sucess',
          token,
          expiresIn: 24 * 60 * 60,
          user: { _id: fetchedUser._id, firstName: fetchedUser.firstName, lastName: fetchedUser.lastName }
        })
      })
    })
    .catch(err => errorHandler.errorMessage('Auth failed', 401, res, err))
}



exports.deleteCustomer = (req, res, next) => {
  const customerId = req.params.customerId

  Customer.findOneAndDelete({ '_id': customerId })
    .then(result => {
      console.log(result);

      res.status(200).json({
        message: 'Customer deleted successfuly'
      })
    })
    .catch(err => { })
}


exports.updateCustomer = (req, res, next) => {
  const { customerId } = req.params
  const updateOps = []


  for (op of req.body) {
    updateOps[op.name] = op.value
  }

  console.log(updateOps, customerId);


  Customer.findOneAndUpdate({ '_id': customerId }, { ...updateOps }, { new: true, runValidators: true })
    .populate('city', 'name')
    .then(customer => {
      res.status(200).json({
        message: 'updated customer successfuly',
        customer
      })
    })
    .catch(err => errorHandler.serverError(err, res))

}


exports.forgotPassword = (req, res, next) => {
  const phone = req.body.phone

  const forgotPassword = ForgotPassword({
    phone
  })

  forgotPassword.save()
    .then(doc => {
      smsMessage.sendMessage(' تم قبول طلبك لتغير كلمة السر الرقم السري' + 'www.smart-phone-baqa.com/client/forgotpassword/' + doc._id, phone)
      res.status(201).json({
        message: 'Forgot password request has been added'
      })
    })
    .catch(err => errorHandler.serverError(err, res))

}
