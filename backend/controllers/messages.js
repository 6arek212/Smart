const Message = require('../models/message')

exports.getMessages = (req, res, next) => {
  Message.find()
    .limit(3)
    .sort({ createdAt: 'desc' })
    .then(docs => {
      res.status(200).json({
        message: 'Messages fetched successfuly',
        messages: docs
      })
    })
}



exports.addMessage = (req, res, next) => {
  const message = new Message({
    text: req.body.message
  })

  message.save().then(result => {
    res.status(201).json({
      message: 'Messages added successfuly'
    })
  })
}



exports.deleteMessage = (req, res, next) => {
  const id = req.params.id

  Message.deleteOne({ '_id': id }).then(result => {
    res.status(200).json({
      message: 'Messages deleted successfuly'
    })
  })

}
