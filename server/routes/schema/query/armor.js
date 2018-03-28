const { GraphQLString } = require('graphql');
const { ArmorType } = require('../type/armor');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getArmorName = {
  type: ArmorType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getArmorName(args.name));
    }, 200))
  }
};

module.exports = {
  getArmorName
};