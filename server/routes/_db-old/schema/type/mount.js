const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
const { 
  CostType,
} = require('./index');



const MountType = new GraphQLObjectType({
  name: 'Mount',
  description: 'Mount database structure',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    speed: { type: CostType },
    capacity: { type: GraphQLString },
    description: { type: new GraphQLList(GraphQLString) },
  })
});



module.exports = {
  MountType
};