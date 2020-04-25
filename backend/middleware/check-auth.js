const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    req.authData = {
      admin: { email: decodedToken.email, phone: decodedToken.phone, adminId: decodedToken.adminId },
      customer: { phone: decodedToken.phone, customerId: decodedToken.customerId }
    }


    if (req.authData.admin.adminId) {
      req.authData.isAdmin = true
    } else {
      req.authData.isAdmin = false
    }

    console.log('Auth access ', req.authData);

    next()
  } catch (err) {
    res.status(401).json({
      message: 'You are not authenticated !'
    })
  }


}
