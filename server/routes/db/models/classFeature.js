const mongoose = require('mongoose')
const { Schema } = mongoose

const ClassFeatureChoices = new Schema({
  choose: Number,
  options: [{
    name: String,
    description: [String]
  }]
})

const ClassFeatureSchema = new Schema({
  name: String,
  description: String,
  classes: [String],
  choices: ClassFeatureChoices
})

module.exports = mongoose.model('classFeature', ClassFeatureSchema)
