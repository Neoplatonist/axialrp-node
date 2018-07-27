const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql');



const SchoOfMagType = new GraphQLObjectType({
  name: 'SchoOfMag',
  description: 'School of Magic database structure',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});



module.exports = {
  SchoOfMagType
};