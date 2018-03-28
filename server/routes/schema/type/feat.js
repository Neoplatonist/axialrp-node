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



const FeatType = new GraphQLObjectType({
  name: 'Feat',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    prerequisite: { type: new GraphQLObjectType({
      name: 'PreReq',

      fields: () => ({
        ability: { type: GraphQLString },
        ability_score: { type: GraphQLInt }
      })
    })},

    benefits: { type: new GraphQLList(GraphQLString) }
  })
});

module.exports = {
  FeatType
};