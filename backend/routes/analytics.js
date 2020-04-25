const router = require('express').Router()
const analyticsControler = require('../controllers/analytics_service')
const NumOf = require('../models/numOf')
const Logs = require('../models/logs')
const moment = require('moment')



router.delete('', (req, res) => {
  Logs.deleteMany().then(rr => {
    res.send('done')
  })
})

router.get('/all', (req, res) => {
  Logs.find().then(docs => {
    res.send(docs)
  })
})


router.get('', (req, res) => {
  const date = new Date()

  var m = moment().utcOffset(0);
  m.subtract(7, 'days')
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  const lastWeekDate = m._d

  console.log(date, '----------', lastWeekDate);


  Logs.aggregate([
    {
      $group: {
        _id: '$name',
        series: { "$push": "$$ROOT" }
      }
    },
    {
      $unwind: "$series"
    },
    {
      $addFields: {
        createdAt: '$series.createdAt'
      }
    },

    { $match: { createdAt: { $gt: lastWeekDate, $lt: date } } },

    {
      $group: {
        _id: {
          name: "$_id",
          day: "$series.day",
          date: '$series.date'
        },
        count: {
          $sum: 1
        }
      }
    },

    {
      $group: {
        _id: "$_id.name",
        series: {
          $addToSet: {
            name: "$_id.day",
            value: {
              $sum: "$count"
            },
            date: '$_id.date'
          }
        }
      }
    },

    { $unwind: '$series' },
    { $sort: { 'series.date': -1 } },
    { $group: { _id: '$_id', 'series': { $push: '$series' } } },
    { $sort: { 'series.date': -1 } },

    {
      $project: {
        _id: 0,
        name: "$_id",
        series: "$series"
      }
    }
  ]).then(docs => {
    res.json(docs)
  })

})




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


module.exports = router
