const { GraphQLList, GraphQLString } = require('graphql');
const { RaceType } = require('../type/race');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getRaces = {
  type: new GraphQLList(RaceType),
  description: 'GETS all Races',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getRaces());
    }, 200))
  }
};

const getRaceName = {
  type: RaceType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Race by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getRaceName(args.name));
    }, 200))
  }
};

module.exports = {
  getRaces,
  getRaceName
};