const { GraphQLList, GraphQLString } = require('graphql');
const { ClassType } = require('../type/class');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getClasses = {
  type: new GraphQLList(ClassType),
  description: 'GETS all Classes',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getClasses());
    }, 200))
  }
};

const getClassName = {
  type: ClassType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Class by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getClassName(args.name));
    }, 200))
  }
};

module.exports = {
  getClasses,
  getClassName
};