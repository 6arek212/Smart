const Logs = require('../models/logs')
const moment = require('moment')
const NumOf = require('../models/numOf')

exports.getAnalytics = () => {
  const date = new Date()

  var m = moment().utcOffset(0);
  m.subtract(7, 'days')
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  const lastWeekDate = m._d

  // console.log(date, '----------', lastWeekDate);


  return Logs.aggregate([
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
  ])

}



exports.getNumOf = () => {
  return NumOf.find().select('value name')
}
