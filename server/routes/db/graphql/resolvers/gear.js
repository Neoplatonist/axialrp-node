module.exports = {
  Query: {
    getGear: (_, __, { db }) => db.Gear.getGear(),
    getGearByName: (_, { name }, { db }) => db.Gear.getGearByName(name)
  },

  Mutation: {
    addGear: (_, args, { db }) => db.Gear.addGear(args),
    removeGear: (_, args, { db }) => db.Gear.removeGear(args)
  }
}