const {
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
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



const GearType = new GraphQLObjectType({
  name: 'Gear',

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