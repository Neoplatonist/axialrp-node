module.exports = {
  Query: {
    getWeapons: (_, __, { db }) => db.Weapon.getWeapons(),
    getWeaponByName: (_, { name }, { db }) => db.Weapon.getWeaponByName(name)
  },

  Mutation: {
    addWeapon: (_, args, { db }) => db.Weapon.addWeapon(args),
    removeWeapon: (_, args, { db }) => db.Weapon.removeWeapon(args)
  }
}