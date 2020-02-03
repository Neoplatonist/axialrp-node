const mongoose = require('mongoose')
const { Schema } = mongoose

const { NameList } = require('./generics')

const WeaponRangeType = new Schema({
  type: {type: String},
  normal: Number,
  long: Number
})

const WeaponDamage = new Schema({
  name: String,
  diceCount: Number,
  diceValue: Number,
  type: String
})

const WeaponSchema = new Schema({
  name: String,
  category: String,
  range: {
    name: String,
    rangeType: [WeaponRangeType]
  },
  cost: {
    quantity: Number,
    unit: String
  },
  damage: [WeaponDamage],
  weight: String,
  properties: [NameList]
})

module.exports = mongoose.model('weapon', WeaponSchema)