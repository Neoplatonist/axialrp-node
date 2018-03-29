const { GraphQLList, GraphQLString } = require('graphql');
const { ArmorType } = require('../type/armor');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getArmors = {
  type: new GraphQLList(ArmorType),
  description: 'GETS all Armor',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getArmors());
    }, 200))
  }
};

const getArmorName = {
  type: ArmorType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Armor by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getArmorName(args.name));
    }, 200))
  }
};

module.exports = {
  getArmors,
  getArmorName
};