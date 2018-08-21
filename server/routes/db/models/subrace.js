const mongoose = require('mongoose')
const { Schema } = mongoose

const SubraceSchema = new Schema({
  name: String,
  description: String,
  abilityBonus: [Number],
  hitPoints: Number,
})

module.exports = mongoose.model('subrace', SubraceSchema)