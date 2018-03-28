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



const KitType = new GraphQLObjectType({
  name: 'Kit',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    weight: { type: GraphQLInt },
    description: { type: new GraphQLList(GraphQLString) },
  })
});



module.exports = {
  KitType
};