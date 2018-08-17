module.exports = {
  Query: {
    getSpells: (_, __, { db }) => db.Spell.getSpells(),
    getSpellByName: (_, { name }, { db }) => db.Spell.getSpellByName(name)
  },

  Mutation: {
    addSpell: (_, args, { db }) => db.Spell.addSpell(args),
    removeSpell: (_, args, { db }) => db.Spell.removeSpell(args)
  }
}