const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const { 
  NameListType
} = require('./index');



const SpellType = new GraphQLObjectType({
  name: 'Spell',
  description: 'Spell database structure',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: new GraphQLList(GraphQLString) },
    higher_level: { type: new GraphQLList(GraphQLString) },
    range: { type: GraphQLString },
    components: { type: new GraphQLList(GraphQLString) },
    material: { type: GraphQLString },
    ritual: { type: GraphQLString },
    duration: { type: GraphQLString },
    concentration: { type: GraphQLString },
    casting_time: { type: GraphQLString },
    level: { type: GraphQLInt },
    school: { type: GraphQLString },
    classes: { type: new GraphQLList(NameListType) },
    subclasses: { type: new GraphQLList(NameListType) }
  })
});



module.exports = {
  SpellType
};