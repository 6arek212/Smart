const Statistic = require('../models/statistic')
const NumOf = require('../models/numOf')


module.exports.onNewRequest = () => {
  const date = new Date()
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const month = date.getMonth() + 1

  Statistic.updateOne(
    { name: 'Requests', 'series.day': day, 'series.month': month, 'series.year': year },
    { $inc: { 'series.$.value': 1 } },
  ).then(result => {
    return NumOf.updateOne({ name: 'Requests' }, { $inc: { 'value': 1 } })
  })
    .then(result => {
      console.log('Updated Requests statics successfuly');
    })
    .catch(err => {
      console.log('Error while updating stats', err);
    })
}





module.exports.onVisit = (req, res) => {
  const date = new Date()
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  const month = date.getMonth() + 1



  Statistic.updateOne(
    { name: 'Visitors', 'series.day': day, 'series.month': month, 'series.year': year },
    { $inc: { 'series.$.value': 1 } },
  ).then(result => {
    console.log('Updated Visitors statics successfuly');
    return NumOf.updateOne({ name: 'Visitors' }, { $inc: { 'value': 1 } })
  })
    .then(result => {
      res.status(200).json({
        message: 'Vist Registered'
      })
    })
    .catch(err => {
      console.log('Error while updating stats', err);
    })
}


