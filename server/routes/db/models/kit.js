const mongoose = require('mongoose')
const { Schema } = mongoose

const KitSchema = new Schema({
  name: String,
  description: [String],
  category: String,
  cost: {
    quantity: Number,
    unit: String
  },
  weight: Number
})

module.exports = mongoose.model('kit', KitSchema)