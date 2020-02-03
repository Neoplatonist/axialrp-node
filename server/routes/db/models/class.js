const mongoose = require('mongoose')
const { Schema } = mongoose

const ClassLevelSchema = new Schema({
  cantrips: Number,
  features: [String],
  invocationsKnown: Number,
  kiPoints: Number,
  martialArts: String,
  proficiencyBonus: Number,
  rages: String,
  rageDamage: Number,
  sneakAttack: String,
  sorceryPoints: Number,
  slotLevel: Number,
  spellsKnown: Number,
  spellSlots: Number,
  type: [Number],
  unarmoredMovement: String,
})

const ProficiencyChoices = new Schema({
  choose: Number,
  type: String,
  from: [{
    name: String,
  }]
})

const ClassSchema = new Schema({
  name: String,
  hitDie: Number,
  armor: [{
    name: String,
  }],
  proficiencyChoices: [ProficiencyChoices],
  savingThrows: [{
    name: String,
  }],
  subClasses: [{
    name: String,
    description: String,
  }],
  startingEquipment: {
    class: String,
  },
  levels: {
    1: ClassLevelSchema,
    2: ClassLevelSchema,
    3: ClassLevelSchema,
    4: ClassLevelSchema,
    5: ClassLevelSchema,
    6: ClassLevelSchema,
    7: ClassLevelSchema,
    8: ClassLevelSchema,
    9: ClassLevelSchema,
    10: ClassLevelSchema,
    11: ClassLevelSchema,
    12: ClassLevelSchema,
    13: ClassLevelSchema,
    14: ClassLevelSchema,
    15: ClassLevelSchema,
    16: ClassLevelSchema,
    17: ClassLevelSchema,
    18: ClassLevelSchema,
    19: ClassLevelSchema,
    20: ClassLevelSchema,
  },
  spellcasting: {
    0: [String],
    1: [String],
    2: [String],
    3: [String],
    4: [String],
    5: [String],
    6: [String],
    7: [String],
    8: [String],
    9: [String],
  },
  weapons: [{
    name: String,
  }]
})

module.exports = mongoose.model('class', ClassSchema)