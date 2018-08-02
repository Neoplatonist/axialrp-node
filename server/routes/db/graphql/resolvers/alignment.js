module.exports = {
  Query: {
    getAlignments: (_, __, { db }) => db.Alignment.getAlignments(),
    getAlignmentByName: (_, { name }, { db }) => db.Alignment.getAlignmentByName(name)
  },

  Mutation: {
    addAlignment: (_, args, { db }) => db.Alignment.addAlignment(args),
    removeAlignment: (_, args, { db }) => db.Alignment.removeAlignment(args)
  }
}