const User = require('../models/user')
const bcrypt = require('bcryptjs')
const errorHandler=require('../utils/error')
const jwt = require('jsonwebtoken')

exports.loginUser = (req, res, next) => {
  let fetchedUser


  if(!req.body.username){
    errorHandler.errorMessage('username was not provided',401,res)
  }


  User.findOne({ $or: [{ phone: req.body.username }, { email: req.body.username }] })
    .then(user => {
      if (!user) {
        return
      }
      else{
        fetchedUser = user
        return bcrypt.compare(req.body.password, user.password)
      }
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Invalid authentication credentials !'
        })
      }else{
        console.log(fetchedUser);


        const token = jwt.sign({ phone: fetchedUser.phone, adminId: fetchedUser._id }, process.env.JWT_KEY, { expiresIn: '24h' })



        res.status(200).json({
          message: 'Auth Sucess',
          token,
          expiresIn: 24 * 60 * 60,
          user: { _id: fetchedUser._id, firstName: fetchedUser.firstName, lastName: fetchedUser.lastName }
        })
      }
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Auth failed'
      })
    })
}


exports.signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        password: hash
      })

      user.save()
        .then(result => {
          const data = {
            ...result._doc,
            password: null
          }
          delete data.password

          const token = jwt.sign({ _id: result._id, email: result.email }, 'secret', { expiresIn: '24h' })


          res.status(201).json({
            message: 'User created',
            token,
            expiresIn: 24 * 60 * 60,
            user: data
          })
        })
        .catch(err => {
          res.status(505).json({
            message: 'Invalid authentication credentials !'
          })
        })
    })
}
