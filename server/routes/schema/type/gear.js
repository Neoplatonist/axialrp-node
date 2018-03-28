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



const GearType = new GraphQLObjectType({
  name: 'Gear',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    cost: { type: CostType },
    description: { type: new GraphQLList(GraphQLString) },
    weight: { type: GraphQLInt }
  })
});



module.exports = {
  GearType
};