const { GraphQLString } = require('graphql');
const { KitType } = require('../type/kit');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getKitName = {
  type: KitType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getKitName(args.name));
    }, 200))
  }
};

module.exports = {
  getKitName
};