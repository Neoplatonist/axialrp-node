const { Class } = require('../models')

module.exports = {
  getClasses: () => {
    return Class.find({})
  },

  getClassesByName: (name) => {
    return Class.findOne({ name })
  },

  addClass: (obj) => {
    return Class({...obj.class}).save()
  },

  removeClass: ({ id }) => {
    return Class.findByIdAndRemove(id).then(obj => {
      return obj.id
    })
  }
}