module.exports = {
  Query: {
    getStartingEquipment: (_, __, { db }) => db.StartingEquipment.getStartingEquipment(),
    getStartingEquipmentByName: (_, { name }, { db }) => db.StartingEquipment.getStartingEquipmentByName(name)
  },

  Mutation: {
    addStartingEquipment: (_, args, { db }) => db.StartingEquipment.addStartingEquipment(args),
    removeStartingEquipment: (_, args, { db }) => db.StartingEquipment.removeStartingEquipment(args)
  }
}