const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decodedToken = jwt.verify(token, process.env.JWT_KEY)
    req.userData = {
      admin: { email: decodedToken.email, adminId: decodedToken.userId },
      customer: { phone: decodedToken.phone, customerId: decodedToken.customerId }
    }
    // console.log('Authorized Access');
    next()
  } catch (err) {
    res.status(401).json({
      message: 'You are not authenticated !'
    })
  }


}
