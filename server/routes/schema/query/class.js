const { GraphQLList, GraphQLString } = require('graphql');
const { ClassType } = require('../type/class');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getClassName = {
  type: ClassType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getClassName(args.name));
    }, 200))
  }
};

module.exports = {
  getClassName
};