const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');



const ClassLevel = new GraphQLObjectType({
  name: 'ClassLevel',
  description: 'Traits gained in a particular class when leveling up.',

  fields: () => ({
    cantrips: { type: GraphQLInt },
    features: { type: new GraphQLList(GraphQLString) },
    invocations_known: { type: GraphQLInt },
    ki_points: { type: GraphQLInt },
    martial_arts: { type: GraphQLString },
    proficiency_bonus: { type: GraphQLInt },
    rages: { type: GraphQLString },
    rage_damage: { type: GraphQLInt },
    sneak_attack: { type: GraphQLString },
    sorcery_points: { type: GraphQLInt },
    slot_level: { type: GraphQLInt },
    spells_known: { type: GraphQLInt },
    spell_slots: { type: GraphQLInt },
    type: { type: new GraphQLList(GraphQLInt) },
    unarmored_movement: { type: GraphQLString },
  })
});

const CostType = new GraphQLObjectType({
  name: 'Cost',

  fields: () => ({
    quantity: { type: GraphQLInt },
    unit: { type: GraphQLString }
  })
});

const EquipChoicesType = new GraphQLObjectType({
  name: 'EquipChoices',

  fields: () => ({
    choice:{ type: new GraphQLList(EquipChoicesArrayType) }
  })
});

const EquipChoicesArrayType = new GraphQLObjectType({
  name: 'EquipChoicesArray',

  fields: () => ({
    choose: { type: GraphQLInt },
    type: { type: GraphQLString },
    from: { type: new GraphQLList(NameQuantType) }
  })
});

const NameDescType = new GraphQLObjectType({
  name: 'NameDesc',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

const NameListType = new GraphQLObjectType({
  name: 'NameList',

  fields: () => ({
    name: { type: GraphQLString }
  })
});

const NameQuantType = new GraphQLObjectType({
  name: 'NameQuant',

  fields: () => ({
    name: { type: GraphQLString },
    quantity: { type: GraphQLInt }
  })
}); 

const OptionsIntType = new GraphQLObjectType({
  name: 'OptionsInt',

  fields: () => ({
    choose: { type: GraphQLInt },
    type: { type: GraphQLString },
    from: { type: new GraphQLList(GraphQLInt) }
  })
});

const OptionsStringType = new GraphQLObjectType({
  name: 'OptionsString',

  fields: () => ({
    choose: { type: GraphQLInt },
    type: { type: GraphQLString },
    from: { type: new GraphQLList(NameListType) }
  })
});



module.exports = {
  ClassLevel,
  CostType,
  EquipChoicesType,
  NameDescType,
  NameListType,
  NameQuantType,
  OptionsIntType,
  OptionsStringType
};