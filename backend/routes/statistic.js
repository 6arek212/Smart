const router = require('express').Router()
const Statistic = require('../models/statistic')
const NumOf = require('../models/numOf')
const statisticController = require('../controllers/statistic')



router.get('/numOf', (req, res, next) => {
  NumOf.find().select('value name')
    .then(result => {
      res.status(200).json(result)
    })
})


router.get('/numOfObject', (req, res, next) => {
  NumOf.find().select('value name')
    .then(results => {
      let obj = {}
      for (result in results) {
        obj[result.name] = obj[result.value]
      }
      res.status(200).json(obj)
    })
})



router.post('', (req, res, next) => {
  // NumOf.create({
  //   name: "Customers"
  // })
  // NumOf.create({
  //   name: "Visitors"
  // })
  // NumOf.create({
  //   name: "Requests"
  // })

  NumOf.create({
    name: "Receipts",
    value: 1000
  })
})



module.exports = router

