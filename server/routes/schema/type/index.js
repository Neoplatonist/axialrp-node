const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');




const CostType = new GraphQLObjectType({
  name: 'Cost',

  fields: () => ({
    quantity: { type: GraphQLInt },
    unit: { type: GraphQLString }
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
  NameDescType,
  NameListType,
  OptionsIntType,
  OptionsStringType
};