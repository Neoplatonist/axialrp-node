const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = require('graphql');
const { 
  CostType,
} = require('./index');



const KitType = new GraphQLObjectType({
  name: 'Kit',
  description: 'Kit database structure',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    weight: { type: GraphQLFloat },
    description: { type: new GraphQLList(GraphQLString) },
  })
});



module.exports = {
  KitType
};