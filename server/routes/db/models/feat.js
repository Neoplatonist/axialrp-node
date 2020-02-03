const mongoose = require('mongoose')
const { Schema } = mongoose

const FeatSchema = new Schema({
  name: String,
  description: String,
  prerequisite: {
    ability: String,
    abilityScore: Number
  },
  benefits: [String]
})

module.exports = mongoose.model('feat', FeatSchema)