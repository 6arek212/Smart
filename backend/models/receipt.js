const mongoose = require('mongoose')

const Product = mongoose.Schema({
  name: String,
  price: Number,
  payment: String
})

const receiptSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true, index: true,
    unique: true, createIndexes: true
  },
  fullName: {
    type: String
  },
  idNumber: {
    type: String
  },
  phoneNumber: { type: String },
  address: { type: String },
  products: { type: [Product], defult: [] },
  price: String,
  notes: String,
  fileName: String
}, {
  timestamps: true
})



module.exports = mongoose.model('receipts', receiptSchema)
