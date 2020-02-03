const { GraphQLList, GraphQLString } = require('graphql');
const { SpellType } = require('../type/spell');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSpells = {
  type: new GraphQLList(SpellType),
  description: 'GETS all Spells',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getSpells());
    }, 200))
  }
};

const getSpellByClass = {
  type: new GraphQLList(SpellType),
  args: { name: { type: GraphQLString } },
  description: 'GETS all Skills by Class',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSpellByClass(args.name));
    }, 200))
  }
};

const getSpellName = {
  type: SpellType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Skill by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSpellName(args.name));
    }, 200))
  }
};

module.exports = {
  getSpells,
  getSpellByClass,
  getSpellName
};