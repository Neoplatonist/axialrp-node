const { GraphQLList, GraphQLString } = require('graphql');
const { ToolType } = require('../type/tool');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getTools = {
  type: new GraphQLList(ToolType),
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getTools());
    }, 200))
  }
};

const getToolName = {
  type: ToolType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getToolName(args.name));
    }, 200))
  }
};

module.exports = {
  getTools,
  getToolName
};