module.exports = {
  Query: {
    getFeat: (_, __, { db }) => db.Feat.getFeat(),
    getFeatByName: (_, { name }, { db }) => db.Feat.getFeatByName(name)
  },

  Mutation: {
    addFeat: (_, args, { db }) => db.Feat.addFeat(args),
    removeFeat: (_, args, { db }) => db.Feat.removeFeat(args)
  }
}