const mongoose = require('mongoose')
const { Schema } = mongoose

const SchoolOfMagicSchema = new Schema({
  name: String,
  description: String
})

module.exports = mongoose.model('schoolOfMagic', SchoolOfMagicSchema)