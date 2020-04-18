const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = mongoose.Schema({
  firstName: { type: String, required: true, match: /^[a-z\u0590-\u05fe\u0621-\u064A]+$/i, תminlength: 2, maxlength: 24 },
  lastName: { type: String, required: true, match: /^[a-z\u0590-\u05fe\u0621-\u064A]+$/i, תminlength: 2, maxlength: 24 },
  email: {
    type: String, required: true, createIndexes: true, index: true, unique: true,
    trim: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  phone: { type: String, required: true, unique: true, index: true, createIndexes: true, maxlength: 24, minlength: 6, match: /^\+?\d+$/ },
  password: { type: String, required: true, match: /[^A-Za-z0-9]+/ },
  gender: { type: String, required: true, enum: ['male', 'female'] },
},
  {
    timestamps: true
  })

userSchema.plugin(uniqueValidator)


module.exports = mongoose.model('User', userSchema)
