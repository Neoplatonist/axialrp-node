const { GraphQLString } = require('graphql');
const { FeatType } = require('../type/feat');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getFeatName = {
  type: FeatType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getFeatName(args.name));
    }, 200))
  }
};

module.exports = {
  getFeatName
};