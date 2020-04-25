const NumOf = require('../models/numOf')


module.exports.onNewRequest = () => {
  NumOf.updateOne({ name: 'Requests' }, { $inc: { 'value': 1 } }) .then(result => {
    console.log('Updated Requests statics successfuly');
  })
  .catch(err => {
    console.log('Error while updating stats', err);
  })
}





module.exports.onVisit = (req, res) => {
  NumOf.updateOne({ name: 'Visitors' }, { $inc: { 'value': 1 } })
  .then(result => {
    res.status(200).json({
      message: 'Vist Registered'
    })
  })
  .catch(err => {
    console.log('Error while updating stats', err);
  })
}


