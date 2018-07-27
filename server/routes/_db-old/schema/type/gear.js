const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = require('graphql');
const { 
  CostType
} = require('./index');



const GearType = new GraphQLObjectType({
  name: 'Gear',
  description: 'Gear database structure',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    description: { type: new GraphQLList(GraphQLString) },
    weight: { type: GraphQLFloat }
  })
});



module.exports = {
  GearType
};