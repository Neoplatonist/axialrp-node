const {
  GraphQLBoolean,
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

const { makeExecutableSchema } = require('graphql-tools');



const ArmorType = new GraphQLObjectType({
  name: 'Armor',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    armor_class: { type: new GraphQLObjectType({
      name: 'ArmorClass',

      fields: () => ({
        base: { type: GraphQLInt },
        dex_bonus: { type: GraphQLBoolean },
        max_bonus: { type: GraphQLInt }
      })
    })},

    str_minimum: { type: GraphQLInt },
    stealth_disadvantage: { type: GraphQLBoolean },
    weight: { type: GraphQLInt },

    cost: { type: new GraphQLObjectType({
      name: 'ArmorCost',

      fields: () => ({
        quantity: { type: GraphQLInt },
        unit: { type: GraphQLString },
      })
    })}
  })
});



module.exports = {
  ArmorType
};