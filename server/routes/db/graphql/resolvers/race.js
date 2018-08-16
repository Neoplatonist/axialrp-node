module.exports = {
  Query: {
    getRaces: (_, __, { db }) => db.Race.getRaces(),
    getRaceByName: (_, { name }, { db }) => db.Race.getRaceByName(name)
  },

  Mutation: {
    addRace: (_, args, { db }) => db.Race.addRace(args),
    removeRace: (_, args, { db }) => db.Race.removeRace(args)
  }
}