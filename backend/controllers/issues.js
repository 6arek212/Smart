const Issue = require('../models/issue')
const errorHandler = require('../utils/error')

exports.addIssue = (req, res, next) => {
  const issue = new Issue({
    name: req.body.name.toUpperCase()
  })

  issue.save()
    .then(result => {
      res.status(201).json({
        message: 'Added issue successfuly'
      })
    }).catch(err => errorHandler.serverError(err, res))
}



exports.getIssues = (req, res, next) => {
  Issue.find().select('name').then(issues => {
      res.status(200).json({
        message: 'Successfuly fetched issues',
        issues
      })
  }).catch(err => errorHandler.serverError(err, res))
}


exports.deleteIssue = (req, res, next) => {
  const id = req.params.issueId
  Issue.deleteOne({ '_id': id })
    .then(result => {
      res.status(200).json({
        message:'Successfuly deleted issue'
      })
    }).catch(err => errorHandler.serverError(err, res))
}
