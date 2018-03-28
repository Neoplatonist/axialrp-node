const { GraphQLString } = require('graphql');
const { GearType } = require('../type/gear');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getGearName = {
  type: GearType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getGearName(args.name));
    }, 200))
  }
};

module.exports = {
  getGearName
};