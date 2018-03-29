const { GraphQLList, GraphQLString } = require('graphql');
const { NameDescType } = require('../type');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Alignment Query
const getAlignments = {
  type: new GraphQLList(NameDescType),
  description: 'GETS all Alignments',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getAlignments());
    }, 200))
  }
};

const getAlignmentName = {
  type: NameDescType,
  args: { name: { type: GraphQLString } },
  description: 'GETS a single Alignment by Name',

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