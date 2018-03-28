const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { NameDescType } = require('./index');



const SubRaceType = new GraphQLObjectType({
  name: 'SubRace',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    ability_bonus: { type: new GraphQLList(GraphQLInt) },
    hit_points: { type: GraphQLInt },

    traits: { type: new GraphQLList(NameDescType)}
  })
});



module.exports = {
  SubRaceType
};
