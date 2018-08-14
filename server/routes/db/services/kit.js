const { Kit } = require('../models')

module.exports = {
  getKits: () => {
    return Kit.find({})
  },

  getKitByName: (name) => {
    return Kit.findOne({ name })
  },

  addKit: (obj) => {
    return Kit({...obj.kit}).save()
  },

  removeKit: ({ id }) => {
    return Kit.findByIdAndRemove(id).then(kit => {
      return kit.id
    })
  }
}