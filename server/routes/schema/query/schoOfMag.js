const { GraphQLList, GraphQLString } = require('graphql');
const { SchoOfMagType } = require('../type/schoOfMag');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSchoOfMags = {
  type: new GraphQLList(SchoOfMagType),
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSchoOfMags());
    }, 200))
  }
};

const getSchoOfMagName = {
  type: SchoOfMagType,
  args: { name: { type: GraphQLString } },

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