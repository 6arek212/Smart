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
    .then(result => {
      res.status(200).json(result)
    })
})



router.post('', (req, res, next) => {
  NumOf.create({
    name:"Customers"
  })
  NumOf.create({
    name:"Visitors"
  })
  NumOf.create({
    name:"Requests"
  })
})



module.exports = router

