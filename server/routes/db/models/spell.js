const mongoose = require('mongoose')
const { Schema } = mongoose

const { NameList } = require('./generics')

const SpellSchema = new Schema({
  name: String,
  description: [String],
  higherLevel: [String],
  range: String,
  components: [String],
  material: String,
  ritual: Boolean,
  duration: String,
  concentration: Boolean,
  castingTime: String,
  level: Number,
  school: String,
  classes: [NameList],
  subclasses: [NameList],
})

module.exports = mongoose.model('spell', SpellSchema)