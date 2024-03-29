const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const { 
  ClassLevel,
  NameDescType,
  NameListType, 
  OptionsStringType 
} = require('./index');



const ClassType = new GraphQLObjectType({
  name: 'Class',
  description: 'Class database structure',

  fields: () => ({
    name: { type: GraphQLString },
    hit_die: { type: GraphQLInt },
    armor: { type: new GraphQLList(NameListType) },
    proficiency_choices: { type: new GraphQLList(OptionsStringType) },
    saving_throws: { type: new GraphQLList(NameListType) },
    sub_classes: { type: new GraphQLList(NameDescType) },
    levels: { type: new GraphQLObjectType({
      name: 'ClassLevels',
      description: 'List of levels per each class.',

      fields: () => ({
        _1: { type: ClassLevel, resolve: parent => parent[1] },
        _2: { type: ClassLevel, resolve: parent => parent[2] },
        _3: { type: ClassLevel, resolve: parent => parent[3] },
        _4: { type: ClassLevel, resolve: parent => parent[4] },
        _5: { type: ClassLevel, resolve: parent => parent[5] },
        _6: { type: ClassLevel, resolve: parent => parent[6] },
        _7: { type: ClassLevel, resolve: parent => parent[7] },
        _8: { type: ClassLevel, resolve: parent => parent[8] },
        _9: { type: ClassLevel, resolve: parent => parent[9] },
        _10: { type: ClassLevel, resolve: parent => parent[10] },
        _11: { type: ClassLevel, resolve: parent => parent[11] },
        _12: { type: ClassLevel, resolve: parent => parent[12] },
        _13: { type: ClassLevel, resolve: parent => parent[13] },
        _14: { type: ClassLevel, resolve: parent => parent[14] },
        _15: { type: ClassLevel, resolve: parent => parent[15] },
        _16: { type: ClassLevel, resolve: parent => parent[16] },
        _17: { type: ClassLevel, resolve: parent => parent[17] },
        _18: { type: ClassLevel, resolve: parent => parent[18] },
        _19: { type: ClassLevel, resolve: parent => parent[19] },
        _20: { type: ClassLevel, resolve: parent => parent[20] }
      })
    })},

    spellcasting: { type: new GraphQLObjectType({
      name: 'SpellCasting',
      description: 'List of spells learned per each spell level.',

      fields: () => ({
        _0: { type: new GraphQLList(GraphQLString), resolve: parent => parent[0] },
        _1: { type: new GraphQLList(GraphQLString), resolve: parent => parent[1] },
        _2: { type: new GraphQLList(GraphQLString), resolve: parent => parent[2] },
        _3: { type: new GraphQLList(GraphQLString), resolve: parent => parent[3] },
        _4: { type: new GraphQLList(GraphQLString), resolve: parent => parent[4] },
        _5: { type: new GraphQLList(GraphQLString), resolve: parent => parent[5] },
        _6: { type: new GraphQLList(GraphQLString), resolve: parent => parent[6] },
        _7: { type: new GraphQLList(GraphQLString), resolve: parent => parent[7] },
        _8: { type: new GraphQLList(GraphQLString), resolve: parent => parent[8] },
        _9: { type: new GraphQLList(GraphQLString), resolve: parent => parent[9] }
      })
    })},
    weapons: { type: new GraphQLList(NameListType) }
  })
});



module.exports = {
  ClassType
};