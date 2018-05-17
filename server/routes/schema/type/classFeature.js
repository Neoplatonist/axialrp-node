const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');



const ClassFeatureType = new GraphQLObjectType({
  name: 'ClassFeature',
  description: 'ClassFeature database structure',

  fields: () => ({
    name: { type: GraphQLString },
    classes: { type: new GraphQLList(GraphQLString) },
    description: { type: new GraphQLList(GraphQLString) }
  })
});



module.exports = {
  ClassFeatureType
};