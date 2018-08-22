const { Mount } = require('../models')

module.exports = {
  getMounts: () => {
    return Mount.find({})
  },

  getMountByName: (name) => {
    return Mount.findOne({ name })
  },

  addMount: (obj) => {
    return Mount({...obj.mount}).save()
  },

  removeMount: ({ id }) => {
    return Mount.findByIdAndRemove(id).then(mount => {
      return mount.id
    })
  }
}