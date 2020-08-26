const Customer = require('../models/customer')
const errorHandler = require('../utils/error')
const sms = require('../utils/smsMessages')
const https = require('https');

let username = 'tarik212';
let password = 'Tarik212';

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
    sms.sendMessage(message, to)
    res.status(200).json({
      message: 'message will be sent'
    })
  }

}





exports.ss = (req, res, next) => {

  let postData = JSON.stringify({
    'to': ['+9720525145565'],
    'body': 'Hello World!'
  });

  let options = {
    hostname: 'api.bulksms.com',
    port: 443,
    path: '/v1/messages',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length,
      'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64')
    }
  };

  let request = https.request(options, (resp) => {
    console.log('statusCode:', resp.statusCode);
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      console.log("Response:", data);
    });
  });

  request.on('error', (e) => {
    console.error(e);
  });

  request.write(postData);
  request.end();

}
