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



const SkillType = new GraphQLObjectType({
  name: 'Skill',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    ability_score: { type: new GraphQLObjectType({
      name: 'SkillAbilityScore',

      fields: () => ({
        name: { type: GraphQLString }
      })
    })}
  })
});

module.exports = {
  SkillType
};