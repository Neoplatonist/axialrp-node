const mongoose = require('mongoose')
const { Schema } = mongoose

const SENameQuant = new Schema({
  name: String,
  quantity: Number
})

const StartingOptions = new Schema({
  choose: Number,
  type: String,
  from: [SENameQuant]
})

const StartingEquipChoices = new Schema({
  choice: [StartingOptions]
})

const StartingEquipmentSchema = new Schema({
  class: String,
  startingEquipment: [SENameQuant],
  choices: [StartingEquipChoices]
})

module.exports = mongoose.model('startingEquipment', StartingEquipmentSchema)