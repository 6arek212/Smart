const Customer = require('../models/customer')
const errorHandler = require('../utils/error')
const sms = require('../utils/smsMessages')



exports.sendMessage = (req, res, next) => {
  const { toAll, to, message } = req.body

  if (toAll) {

    Customer.find().select({ "phone": 1, "_id": 0 }).then(docs => {
      console.log(docs);

      res.status(200).json({
        message: 'messages will be sent'
      })

      for (doc of docs) {
        sms.sendMessage(message, doc.phone)
      }

    })


  } else {
      sms.sendMessage(message,to)
      res.status(200).json({
        message: 'message will be sent'
      })
  }

}
