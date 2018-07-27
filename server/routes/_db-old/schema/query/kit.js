const { GraphQLList, GraphQLString } = require('graphql');
const { KitType } = require('../type/kit');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getKits = {
  type: new GraphQLList(KitType),
  description: 'GETS all Kits',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getKits());
    }, 200))
  }
};

const getKitName = {
  type: KitType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Kit by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getKitName(args.name));
    }, 200))
  }
};

module.exports = {
  getKits,
  getKitName
};