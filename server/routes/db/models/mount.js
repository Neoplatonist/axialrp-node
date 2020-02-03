const mongoose = require('mongoose')
const { Schema } = mongoose

const MountSchema = new Schema({
  name: String,
  category: String,
  cost: {
    quantity: Number,
    unit: String
  },
  speed: {
    quantity: Number,
    unit: String
  },
  capacity: String
})

module.exports = mongoose.model('mount', MountSchema)