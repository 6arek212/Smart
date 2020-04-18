console.log(process.env.accountSid, process.env.authToken);

const client = require('twilio')(process.env.accountSid, process.env.authToken);
const errorHandler = require('../utils/error')


exports.sendMessage = (message, to) => {
  client.messages
    .create({
      body: message,
      from: '+12029914931',
      to: '+972' + to
    })
    .then(result => {
      console.log('message will be sent');
    })
    .catch(err => {
      console.log(err);

    }
    )
}
