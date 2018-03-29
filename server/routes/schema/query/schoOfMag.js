const { GraphQLList, GraphQLString } = require('graphql');
const { SchoOfMagType } = require('../type/schoOfMag');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSchoOfMags = {
  type: new GraphQLList(SchoOfMagType),
  description: 'GETS all Schools of Magic',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getSchoOfMags());
    }, 200))
  }
};

const getSchoOfMagName = {
  type: SchoOfMagType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one School of Magic by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSchoOfMagName(args.name));
    }, 200))
  }
};

module.exports = {
  getSchoOfMags,
  getSchoOfMagName
};