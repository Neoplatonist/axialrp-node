const { Feat } = require('../models')

module.exports = {
  getFeat: () => {
    return Feat.find({})
  },

  getFeatByName: (name) => {
    return Feat.findOne({ name })
  },

  addFeat: (obj) => {
    return Feat({...obj.feat}).save()
  },

  removeFeat: ({ id }) => {
    return Feat.findByIdAndRemove(id).then(feat => {
      return feat.id
    })
  }
}