const mongoose = require('mongoose')
const Issue = require('./issue')
const Device = require('./device')
const Company = require('./company')
const City = require('./city')
const NumOf = require('./numOf')
const Customer = require('./customer')
const smsMessage = require('../utils/smsMessages')
const moment = require('moment');
const Logs = require('../models/logs')


const RequestSchema = mongoose.Schema({
  title: { type: String, required: true, match: /^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/ },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  device: { type: mongoose.Schema.Types.ObjectId, ref: "Devices", required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, immutable: true, ref: "customers", required: true },
  issue: { type: mongoose.Schema.Types.ObjectId, ref: "Issues" },
  otherIssue: { type: String, match: /^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/, default: null },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "Cities", required: true },
  whereAbout: { type: String, match: /^([a-z\u0590-\u05fe\u0621-\u064A]+\s)*[a-z\u0590-\u05fe\u0621-\u064A]+$/ },
  status: {
    type: String, default: 'IN-PROGRESS', enum: ['DONE', 'IN-PROGRESS', 'CANCEL']
  },
  price: { type: Number, min: 0, max: 10000 }
},
  {
    timestamps: true
  })


RequestSchema.post('save', async (doc) => {
  console.log('post saving request', doc);
  const { customer, company, device, issue, city } = doc

  await Customer.updateOne({ _id: customer }, { $inc: { 'numOfRequests': 1 } }).exec()
  await Device.updateOne({ _id: device }, { $inc: { 'numOfRequests': 1 } }).exec()
  await Company.updateOne({ _id: company }, { $inc: { 'numOfRequests': 1 } }).exec()
  await Issue.updateOne({ _id: issue }, { $inc: { 'numOfRequests': 1 } }).exec()
  await City.updateOne({ _id: city }, { $inc: { 'numOfRequests': 1 } }).exec()
  await NumOf.updateOne({ name: 'Requests' }, { $inc: { 'value': 1 } }).exec()


  let time = Date.now();
  var m = moment().utcOffset(0);
  m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })

  Logs.create({
    name: 'new-request',
    date: m,
    day: moment(time).format("dddd"),
    hour: moment(time).hour()
  })

  const mCustomer = await Customer.findOne({ '_id': customer }).exec()
  smsMessage.sendMessage('طلبك فد استلم بنجاح سنقوم بالتواصل معك شكرا لاختيارك سمارت فون', mCustomer.phone)
})



RequestSchema.post('findOneAndDelete', async (doc, next) => {
  console.log('post deleting request', doc);
  const { customer, company, device, issue, city, status } = doc

  await Customer.updateOne({ _id: customer }, { $inc: { 'numOfRequests': -1 } }).exec()
  await Device.updateOne({ _id: device }, { $inc: { 'numOfRequests': -1 } }).exec()
  await Company.updateOne({ _id: company }, { $inc: { 'numOfRequests': -1 } }).exec()
  await Issue.updateOne({ _id: issue }, { $inc: { 'numOfRequests': -1 } }).exec()
  await City.updateOne({ _id: city }, { $inc: { 'numOfRequests': -1 } }).exec()
  await NumOf.updateOne({ name: 'Requests' }, { $inc: { 'value': -1 } }).exec()

  if (status === "DONE") {
    await Customer.updateOne({ _id: customer }, { $inc: { 'numOfDoneRequests': -1 } }).exec()
  }

  next()
})







module.exports = mongoose.model('Requests', RequestSchema)
