const City = require('../models/city')
const errorHandler = require('../utils/error')

exports.getCities = (req, res, next) => {

  City.find().select('name').then(cities => {
    if (!cities || cities.length == 0)
      return errorHandler.errorMessage('No cities', 404, res)

    res.status(200).json({
      message: 'Cities fetched successfuly',
      cities
    })
  }).catch(err => errorHandler.serverError(err, res))
}



exports.getAdminCities = (req, res, next) => {
  City.find().then(cities => {
    if (!cities)
      return errorHandler.errorMessage('No cities', 404, res)

    res.status(200).json({
      message: 'Cities fetched successfuly',
      cities
    })
  }).catch(err => errorHandler.serverError(err, res))
}


exports.deleteCity = (req, res, next) => {
  const cityId = req.params.cityId

  console.log('deleting city ',cityId);

  City.findOneAndDelete({ _id: cityId }).then(result => {
    res.status(200).json({
      message: 'Cities deleted successfuly'
    })
  }).catch(err => errorHandler.serverError(err, res))
}




exports.addCity = (req, res, next) => {

  const city = new City({
    name: req.body.name
  })

  city.save().then(cit => {
    res.status(200).json({
      message: 'Cities added successfuly'
    })
  }).catch(err => errorHandler.serverError(err, res))
}


