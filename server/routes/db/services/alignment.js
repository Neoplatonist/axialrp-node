const { Alignment } = require('../models')

module.exports = {
  getAlignments: () => {
    return Alignment.find({})
  },

  getAlignmentByName: (name) => {
    return Alignment.findOne({ name })
  },

  addAlignment: ({ name, description }) => {
    return Alignment({ name, description }).save()
  },

  removeAlignment: ({ id }) => {
    return Alignment.findByIdAndRemove(id).then(alignment => {
      return alignment.id
    })
  }
}