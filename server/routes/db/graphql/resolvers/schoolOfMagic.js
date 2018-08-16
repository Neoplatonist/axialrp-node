module.exports = {
  Query: {
    getSchoolOfMagic: (_, __, { db }) => db.SchoolOfMagic.getSchoolOfMagic(),
    getSchoolOfMagicByName: (_, { name }, { db }) => db.SchoolOfMagic.getSchoolOfMagicByName(name)
  },

  Mutation: {
    addSchoolOfMagic: (_, args, { db }) => db.SchoolOfMagic.addSchoolOfMagic(args),
    removeSchoolOfMagic: (_, args, { db }) => db.SchoolOfMagic.removeSchoolOfMagic(args)
  }
}