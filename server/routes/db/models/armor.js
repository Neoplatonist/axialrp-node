const mongoose = require('mongoose')
const { Schema } = mongoose

const ArmorSchema = new Schema({
  name: String,
  category: String,
  armorClass: {
    base: Number,
    dexBonus: Number,
    maxBonus: Number
  },
  strMinimum: Number,
  stealthDisadvantage: Boolean,
  weight: Number,
  cost: {
    quantity: Number,
    unit: String
  }
})

module.exports = mongoose.model('armor', ArmorSchema)