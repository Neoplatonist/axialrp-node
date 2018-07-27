const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');



const FeatType = new GraphQLObjectType({
  name: 'Feat',
  description: 'Feat database structure',

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