module.exports = {
  Query: {
    getMounts: (_, __, { db }) => db.Mount.getMounts(),
    getMountByName: (_, { name }, { db }) => db.Mount.getMountByName(name)
  },

  Mutation: {
    addMount: (_, args, { db }) => db.Mount.addMount(args),
    removeMount: (_, args, { db }) => db.Mount.removeMount(args)
  }
}