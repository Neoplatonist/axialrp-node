const mongoose = require('mongoose')
const { Schema } = mongoose
const { NameList } = require('./generics')

const SkillSchema = new Schema({
  name: String,
  description: String,
  // abilityScore: NameList
})

module.exports = mongoose.model('skill', SkillSchema)