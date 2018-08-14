const { Gear } = require('../models')

module.exports = {
  getGear: () => {
    return Gear.find({})
  },

  getGearByName: (name) => {
    return Gear.findOne({ name })
  },

  addGear: (obj) => {
    return Gear({...obj.gear}).save()
  },

  removeGear: ({ id }) => {
    return Gear.findByIdAndRemove(id).then(gear => {
      return gear.id
    })
  }
}