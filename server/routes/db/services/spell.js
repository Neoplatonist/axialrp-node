const { Spell } = require('../models')

module.exports = {
  getSpells: () => {
    return Spell.find({})
  },

  getSpellByName: (name) => {
    return Spell.findOne({ name })
  },

  addSpell: (obj) => {
    return Spell({...obj.spell}).save()
  },

  removeSpell: ({ id }) => {
    return Spell.findByIdAndRemove(id).then(spell => {
      return spell.id
    })
  }
}