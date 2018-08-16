const { Race } = require('../models')

module.exports = {
  getRaces: () => {
    return Race.find({})
  },

  getRaceByName: (name) => {
    return Race.findOne({ name })
  },

  addRace: (obj) => {
    return Race({...obj.race}).save()
  },

  removeRace: ({ id }) => {
    return Race.findByIdAndRemove(id).then(race => {
      return race.id
    })
  }
}