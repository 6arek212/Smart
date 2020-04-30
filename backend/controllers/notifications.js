const Message = require('../models/notification')

exports.getNotifications = (req, res, next) => {
  Message.find()
    .limit(3)
    .sort({ createdAt: 'desc' })
    .then(docs => {
      res.status(200).json({
        message: 'Notifications fetched successfuly',
        notifications: docs
      })
    })
}



exports.addNotification = (req, res, next) => {
  const message = new Message({
    text: req.body.message
  })

  message.save().then(result => {
    res.status(201).json({
      message: 'Messages added successfuly'
    })
  })
}



exports.deleteNotification = (req, res, next) => {
  const id = req.params.id

  Message.deleteOne({ '_id': id }).then(result => {
    res.status(200).json({
      message: 'Messages deleted successfuly'
    })
  })

}
