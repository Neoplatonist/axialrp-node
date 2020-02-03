const { GraphQLList, GraphQLString } = require('graphql');
const { SubRaceType } = require('../type/subrace');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSubRaces = {
  type: new GraphQLList(SubRaceType),
  description: 'GETS all SubRaces',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getSubRaces());
    }, 200))
  }
};

const getSubRaceName = {
  type: SubRaceType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one SubRace by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSubRaceName(args.name));
    }, 200))
  }
};

module.exports = {
  getSubRaces,
  getSubRaceName
};