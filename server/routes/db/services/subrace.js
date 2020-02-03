const { Subrace } = require('../models')

module.exports = {
  getSubraces: () => {
    return Subrace.find({})
  },

  getSubraceByName: (name) => {
    return Subrace.findOne({ name })
  },

  addSubrace: (obj) => {
    return Subrace({...obj.subrace}).save()
  },

  removeSubrace: ({ id }) => {
    return Subrace.findByIdAndRemove(id).then(subrace => {
      return subrace.id
    })
  }
}