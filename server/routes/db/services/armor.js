const { Armor } = require('../models')

module.exports = {
  getArmor: () => {
    return Armor.find({})
  },

  getArmorByName: (name) => {
    return Armor.findOne({ name })
  },

  getArmorByCategory: (category) => {
    return Armor.find({ category })
  },

  addArmor: ({ 
    name,
    category,
    armorClass,
    strMinimum,
    stealthDisadvantage,
    weight,
    cost
  }) => {
    return Armor({ 
      name,
      category,
      armorClass,
      strMinimum,
      stealthDisadvantage,
      weight,
      cost 
    }).save()
  },

  removeArmor: ({ id }) => {
    return Armor.findByIdAndRemove(id).then(armor => {
      return armor.id
    })
  }
}