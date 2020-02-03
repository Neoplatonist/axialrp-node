const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { RootQuery } = require('./query');


module.exports = new GraphQLSchema({
  query: RootQuery
});