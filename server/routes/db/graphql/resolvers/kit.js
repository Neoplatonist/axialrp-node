module.exports = {
  Query: {
    getKits: (_, __, { db }) => db.Kit.getKits(),
    getKitByName: (_, { name }, { db }) => db.Kit.getKitByName(name)
  },

  Mutation: {
    addKit: (_, args, { db }) => db.Kit.addKit(args),
    removeKit: (_, args, { db }) => db.Kit.removeKit(args)
  }
}