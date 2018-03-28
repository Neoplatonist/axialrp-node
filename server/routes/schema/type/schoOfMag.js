const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { 
  NameDescType,
  NameListType, 
  OptionsIntType, 
  OptionsStringType 
} = require('./index');



const SchoOfMagType = new GraphQLObjectType({
  name: 'SchoOfMag',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = {
  SchoOfMagType
};