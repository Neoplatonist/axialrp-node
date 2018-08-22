const { Weapon } = require('../models')

module.exports = {
  getWeapons: () => {
    return Weapon.find({})
  },

  getWeaponByName: (name) => {
    return Weapon.findOne({ name })
  },

  addWeapon: (obj) => {
    return Weapon({...obj.weapon}).save()
  },

  removeWeapon: ({ id }) => {
    return Weapon.findByIdAndRemove(id).then(weapon => {
      return weapon.id
    })
  }
}