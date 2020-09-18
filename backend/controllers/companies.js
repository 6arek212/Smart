
const Company = require('../models/company')

exports.getComapnies=(req, res, next) => {
  Company.find().select('name')
    .then(docs => {
      res.status(201).json({
        message: 'Companies Feteched Successfuly',
        companies:docs
      })
    })
    .catch(err => {

    })

}


exports.addCompany=(req, res, next) => {

  const company = new Company({
    name:req.body.name.toUpperCase()
  })


  company.save()
    .then(result => {
      res.status(201).json({
        message: 'Company Added Successfuly',
        result
      })
    })
    .catch(err => {

    })

}
