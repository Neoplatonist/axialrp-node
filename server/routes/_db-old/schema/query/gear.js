const { GraphQLList, GraphQLString } = require('graphql');
const { GearType } = require('../type/gear');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getGears = {
  type: new GraphQLList(GearType),
  description: 'GETS all Gear',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getGears());
    }, 200))
  }
};

const getGearName = {
  type: GearType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Gear by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getGearName(args.name));
    }, 200))
  }
};

module.exports = {
  getGears,
  getGearName
};