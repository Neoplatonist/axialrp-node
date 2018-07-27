const mongoose = require('mongoose')
const { Schema } = mongoose

const AlignmentSchema = new Schema({
  name: String,
  description: String
})

module.exports = mongoose.model('alignment', AlignmentSchema)