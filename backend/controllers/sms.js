const Customer = require('../models/customer')
const client = require('twilio')(process.env.accountSid, process.env.authToken);
const errorHandler = require('../utils/error')



exports.sendMessage = (req, res, next) => {
  const { toAll, to, message } = req.body



  if (toAll) {

    Customer.find().select({ "phone": 1, "_id": 0}).then(docs => {
      console.log(docs);

      res.status(200).json({
        message: 'messages will be sent'
      })

      for (doc of docs) {

        client.messages
          .create({
            body: message,
            from: '+12029914931',
            to: '+972' + doc.phone
          })
          .then(message => console.log('Message sent'))
          .catch(err => {
            return errorHandler.errorMessage('Check message field', 500, res, err)
          }
          )

      }

    })


  } else {
    client.messages
      .create({
        body: message,
        from: '+12029914931',
        to: '+972' + to
      })
      .then(message => {
        res.status(200).json({
          message: 'message will be sent'
        })
      })
      .catch(err => {
          return errorHandler.errorMessage('Check message field', 500, res, err)
      }
      )
  }

}
