const { ClassFeature } = require('../models')

module.exports = {
  getClassFeatures: () => {
    return ClassFeature.find({})
  },

  getClassFeatureByName: (name) => {
    return ClassFeature.findOne({ name })
  },

  addClassFeature: ({ feature }) => {
    return ClassFeature({ ...feature }).save()
  },

  removeClassFeature: ({ id }) => {
    return ClassFeature.findByIdAndRemove(id).then(feature => {
      return feature.id
    })
  }
}