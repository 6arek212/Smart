const jwt = require('jsonwebtoken')

module.exports = (socket, next) => {
  try {
    if (socket.handshake.query && socket.handshake.query.token) {
      jwt.verify(socket.handshake.query.token, process.env.JWT_KEY, function (err, decoded) {
        if (err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
        console.log('Socket Authorized Access');
        next();
      });
    } else {
      console.log('No Socket Authorized Access');
      next(new Error('Authentication error'));
    }
  } catch (err) {
    console.log('No Socket Authorized Access');
    res.status(401).json({
      message: 'You are not authenticated !'
    })
  }


}
