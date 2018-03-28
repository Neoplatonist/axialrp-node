const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { 
  CostType,
  NameDescType,
  NameListType, 
  OptionsIntType, 
  OptionsStringType 
} = require('./index');



const WeaponType = new GraphQLObjectType({
  name: 'Weapon',

  fields: () => ({
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    range: { type: GraphQLString },
    cost: { type: CostType },

    damage: { type: new GraphQLObjectType({
      name: 'WeaponDamage',

      fields: () => ({
        dice_count: { type: GraphQLInt },
        dice_value: { type: GraphQLInt },
        type: { type: GraphQLString },
      })
    })},

    atk_range: { type: new GraphQLObjectType({
      name: 'WeaponATKrange',

      fields: () => ({
        normal: { type: GraphQLInt },
        long: { type: GraphQLInt },
      })
    })},

    weight: { type: GraphQLInt },
    properties: { type: new GraphQLList(NameListType) },
    throw_atk_range: { type: new GraphQLObjectType({
      name: 'WeaponThrowATKrange',

      fields: () => ({
        normal: { type: GraphQLInt },
        long: { type: GraphQLInt },
      })
    })}
  })
});

module.exports = {
  WeaponType
};