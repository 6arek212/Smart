const mongoose = require('mongoose')
const Issue = require('./issue')
const Device = require('./device')
const Company = require('./company')
const City = require('./city')
const NumOf = require('./numOf')
const Request = require('./request')
const moment = require('moment');
const Logs = require('../models/logs')

const customerSchema = mongoose.Schema({
  firstName: { type: String, required: true, match: /^[a-z\u0590-\u05fe\u0621-\u064A]+$/i, תminlength: 2, maxlength: 24 },
  lastName: { type: String, required: true, match: /^[a-z\u0590-\u05fe\u0621-\u064A]+$/i, תminlength: 2, maxlength: 24 },
  phone: { type: String, required: true, unique: true, index: true, createIndexes: true, maxlength: 24, minlength: 6, match: /^\+?\d+$/ },
  gender: { type: String, required: true, enum: ['male', 'female'] },
  countryCode: { type: String, required: true, match: /^\+?\d+$/ },
  password: { type: String, required: true, match: /[^A-Za-z0-9]+/ },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "Cities", required: true },
  numOfRequests: { type: Number, default: 0 },
  numOfDoneRequests: { type: Number, default: 0 },
  token: { type: String}
},
  {
    timestamps: true
  })




customerSchema.post('save', async (doc, next) => {
  console.log('post saving customer', doc);
  let time = Date.now();
  var m = moment().utcOffset(0);
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })


  await NumOf.updateOne({ name: 'Customers' }, { $inc: { 'value': 1 } }).exec()
  await City.updateOne({ '_id': doc.city }, { $inc: { 'numOfCustomers': 1 } }).exec()

  Logs.create({
    name: 'new-customer',
    date: m,
    day: moment(time).format("dddd"),
    hour: moment(time).hour()
  })

  next()
})




customerSchema.post('findOneAndDelete', async (doc, next) => {
  console.log('post deleting customer', doc);
  const { numOfRequests, _id } = doc




  Request.find({ 'customer': _id }).then(res => {
    if (!res) {
      for (request of res) {
        const { city, issue, device, company } = request
        City.updateOne({ '_id': city }, { $inc: { 'value': -numOfRequests } }).exec()
        Device.updateOne({ '_id': device }, { $inc: { 'value': -numOfRequests } }).exec()
        Company.updateOne({ '_id': company }, { $inc: { 'value': -numOfRequests } }).exec()
        Issue.updateOne({ '_id': issue }, { $inc: { 'value': -numOfRequests } }).exec()
      }
    }
  })


  await NumOf.updateOne({ name: 'Requests' }, { $inc: { 'value': -numOfRequests } }).exec()
  await NumOf.updateOne({ name: 'Customers' }, { $inc: { 'value': -1 } }).exec()

  next()
})









module.exports = mongoose.model('customers', customerSchema)
