const {
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
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
    weight: { type: GraphQLFloat },
    description: { type: new GraphQLList(GraphQLString) },
  })
});



module.exports = {
  KitType
};