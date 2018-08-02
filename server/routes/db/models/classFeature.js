const mongoose = require('mongoose')
const { Schema } = mongoose

const ClassFeatureSchema = new Schema({
  name: String,
  description: String,
  classes: [String]
})

module.exports = mongoose.model('classFeature', ClassFeatureSchema)