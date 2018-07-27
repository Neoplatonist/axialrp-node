module.exports = {
  Query: {
    alignments: (_, __, { db }) => db.Alignment.getAlignments(),
    alignment: (_, { name }, { db }) => db.Alignment.getAlignmentByName(name)
  },

  Mutation: {
    addAlignment: (_, args, { db }) => db.Alignment.addAlignment(args),
    removeAlignment: (_, args, { db }) => db.Alignment.removeAlignment(args)
  }
}