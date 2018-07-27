module.exports = {
  Query: {
    getArmor: (_, __, { db }) => db.Armor.getArmor(),
    getArmorByName: (_, { name }, { db }) => db.Armor.getArmorByName(name),
    getArmorByCategory: (_, { category }, { db }) => db.Armor.getArmorByCategory(category),
  },

  Mutation: {
    addArmor: (_, args, { db }) => db.Armor.addArmor(args),
    removeArmor: (_, args, { db }) => db.Armor.removeArmor(args)
  }
}