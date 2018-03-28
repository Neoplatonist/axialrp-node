const {
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { 
  CostType,
  NameDescType,
  NameListType, 
  OptionsIntType, 
  OptionsStringType 
} = require('./index');



const MountType = new GraphQLObjectType({
  name: 'Mount',

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