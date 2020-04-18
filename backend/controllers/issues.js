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

    if (!issues || issues.length === 0)
      return res.status(404).json({
        message: 'No issues found'
      })
      else{
        res.status(200).json({
          message: 'Successfuly fetched issues',
          issues
        })
      }
  }).catch(err=>errorHandler.serverError(err,res))
}
