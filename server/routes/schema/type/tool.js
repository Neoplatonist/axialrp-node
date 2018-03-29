const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const { 
  CostType
} = require('./index');



const ToolType = new GraphQLObjectType({
  name: 'Tool',
  description: 'Tool database structure',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    description: { type: new GraphQLList(GraphQLString) },
    weight: { type: GraphQLInt }
  })
});



module.exports = {
  ToolType
};