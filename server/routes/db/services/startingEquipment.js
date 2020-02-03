const { StartingEquipment } = require('../models')

module.exports = {
  getStartingEquipment: () => {
    return StartingEquipment.find({})
  },

  getStartingEquipmentByName: (name) => {
    return StartingEquipment.findOne({ name })
  },

  addStartingEquipment: (obj) => {
    return StartingEquipment({...obj.startEquip}).save()
  },

  removeStartingEquipment: ({ id }) => {
    return StartingEquipment.findByIdAndRemove(id).then(equip => {
      return equip.id
    })
  }
}