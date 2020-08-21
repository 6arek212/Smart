const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    req.adminData =
      { email: decodedToken.email, phone: decodedToken.phone, adminId: decodedToken.adminId }

      console.log('AAAAAAAAAAAAAAdmin Auth  -----------> ',req.adminData);


    User.find({ '_id': decodedToken.adminId })
      .then(result => {
        if (result)
          next()
        else {
          res.status(401).json({
            message: 'You are not an admin !'
          })
        }
      }).catch(err => {
        res.status(401).json({
          message: 'You are not an admin !'
        })
      })


  } catch (err) {
    res.status(401).json({
      message: 'You are not an admin !'
    })
  }


}
