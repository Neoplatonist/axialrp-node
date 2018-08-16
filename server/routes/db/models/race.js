const mongoose = require('mongoose')
const { Schema } = mongoose
const { NameList, NameDescList } = require('./generics')

const RaceLangSchema = new Schema({
  description: String,
  options: {
    choose: Number,
    type: {type: String},
    from: [NameList]
  },
  type: [NameList]
})

const RaceTraitSchema = new Schema({
  options: {
    choose: Number,
    type: {type: String},
    from: [String]
  },
  type: [NameDescList]
})

const RaceSchema = new Schema({
  name: String,
  description: String,
  abilityBonus: [Number],
  age: {
    adult: Number,
    description: String,
    max: Number
  },
  alignment: {
    description: String,
    main: String
  },
  size: {
    description: String,
    height: {
      min: Number,
      max: Number
    },
    size: String
  },
  speed: {
    base: Number,
    description: String
  },
  languages: RaceLangSchema,
  traits: RaceTraitSchema,
  subRaces: [NameList],
  savingThrows: {
    against: String,
    description: String
  },
  tools: {
    choose: Number,
    type: {type: String},
    from: [String]
  },
  weapons: [String]
})

module.exports = mongoose.model('race', RaceSchema)