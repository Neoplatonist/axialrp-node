const { GraphQLString } = require('graphql');
const { SubRaceType } = require('../type/subrace');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSubRaceName = {
  type: SubRaceType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSubRaceName(args.name));
    }, 200))
  }
};

module.exports = {
  getSubRaceName
};