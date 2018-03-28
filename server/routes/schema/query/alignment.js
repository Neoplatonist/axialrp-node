const { GraphQLList, GraphQLString } = require('graphql');
const { NameDescType } = require('../type');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getAlignments = {
  type: new GraphQLList(NameDescType),

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getAlignments());
    }, 200))
  }
};

const getAlignmentName = {
  type: NameDescType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getAlignmentName(args.name));
    }, 200))
  }
};

module.exports = {
  getAlignments,
  getAlignmentName
};