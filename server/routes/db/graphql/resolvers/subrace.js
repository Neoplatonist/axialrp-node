module.exports = {
  Query: {
    getSubraces: (_, __, { db }) => db.Subrace.getSubraces(),
    getSubraceByName: (_, { name }, { db }) => db.Subrace.getSubraceByName(name)
  },

  Mutation: {
    addSubrace: (_, args, { db }) => db.Subrace.addSubrace(args),
    removeSubrace: (_, args, { db }) => db.Subrace.removeSubrace(args)
  }
}