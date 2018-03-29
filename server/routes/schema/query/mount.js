const { GraphQLList, GraphQLString } = require('graphql');
const { MountType } = require('../type/mount');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getMounts = {
  type: new GraphQLList(MountType),
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getMounts());
    }, 200))
  }
};

const getMountName = {
  type: MountType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getMountName(args.name));
    }, 200))
  }
};

module.exports = {
  getMounts, 
  getMountName
};