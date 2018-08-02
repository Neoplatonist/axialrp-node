module.exports = {
  Query: {
    getClassFeatures: (_, __, { db }) => db.ClassFeature.getClassFeatures(),
    getClassFeatureByName: (_, { name }, { db }) => db.ClassFeature.getClassFeatureByName(name)
  },

  Mutation: {
    addClassFeature: (_, args, { db }) => db.ClassFeature.addClassFeature(args),
    removeClassFeature: (_, args, { db }) => db.ClassFeature.removeClassFeature(args)
  }
}