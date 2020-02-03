const { SchoolOfMagic } = require('../models')

module.exports = {
  getSchoolOfMagic: () => {
    return SchoolOfMagic.find({})
  },

  getSchoolOfMagicByName: (name) => {
    return SchoolOfMagic.findOne({ name })
  },

  addSchoolOfMagic: ({ name, description }) => {
    return SchoolOfMagic({ name, description }).save()
  },

  removeSchoolOfMagic: ({ id }) => {
    return SchoolOfMagic.findByIdAndRemove(id).then(school => {
      return school.id
    })
  }
}