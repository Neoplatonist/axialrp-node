const mongoose = require('mongoose')
const { Schema } = mongoose

const ToolSchema = new Schema({
  name: String,
  category: String,
  cost: {
    quantity: Number,
    unit: String,
  },
  weight: Number,
  description: [String],
})

module.exports = mongoose.model('tool', ToolSchema)