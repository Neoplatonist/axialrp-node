const mongoose = require('mongoose')

const alignmentSchema = new mongoose.Schema({
  name: String,
  description: String
})

module.exports = mongoose.model('alignment', alignmentSchema)