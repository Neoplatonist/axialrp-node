const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');



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
    from: { type: new GraphQLList(GraphQLString) }
  })
});



module.exports = {
  CostType,
  EquipChoicesType,
  NameDescType,
  NameListType,
  NameQuantType,
  OptionsIntType,
  OptionsStringType
};