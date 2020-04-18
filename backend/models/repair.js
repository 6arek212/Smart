const mongoose = require('mongoose')


const RepairSchema = mongoose.Schema({
  notes: { type: String },
  price: { type: Number },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" ,required: true },
  device:{ type: mongoose.Schema.Types.ObjectId, ref: "Device" ,required: true }
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Repair', RepairSchema)

