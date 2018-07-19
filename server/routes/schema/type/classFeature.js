const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');



const ClassFeatureChoice = new GraphQLObjectType({
  name: 'ClassFeatureChoice',
  description: 'ClassFeature individual choices',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: new GraphQLList(GraphQLString) }
  })
});

const ClassFeatureChoices = new GraphQLObjectType({
  name: 'ClassFeatureSelection',
  description: 'ClassFeature list of choices',

  fields: () => ({
    choose: { type: GraphQLInt },
    options: { type: new GraphQLList(ClassFeatureChoice)}
  })
});

const ClassFeatureType = new GraphQLObjectType({
  name: 'ClassFeature',
  description: 'ClassFeature database structure',

  fields: () => ({
    name: { type: GraphQLString },
    classes: { type: new GraphQLList(GraphQLString) },
    description: { type: new GraphQLList(GraphQLString) },

    choices: { type: ClassFeatureChoices}
  })
});



module.exports = {
  ClassFeatureType
};