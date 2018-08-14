const mongoose = require('mongoose')
const { Schema } = mongoose

const GearSchema = new Schema({
  name: String,
  category: String,
  cost: {
    quantity: Number,
    unit: String
  },
  weight: Number
})

module.exports = mongoose.model('gear', GearSchema)