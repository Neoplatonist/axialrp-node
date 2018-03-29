const { GraphQLList, GraphQLString } = require('graphql');
const { SpellType } = require('../type/spell');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSpells = {
  type: new GraphQLList(SpellType),
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSpells());
    }, 200))
  }
};

const getSpellName = {
  type: SpellType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSpellName(args.name));
    }, 200))
  }
};

module.exports = {
  getSpells,
  getSpellName
};