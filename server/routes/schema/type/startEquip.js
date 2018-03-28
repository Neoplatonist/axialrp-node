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
  CostType,
  EquipChoicesType,
  NameDescType,
  NameListType, 
  NameQuantType,
  OptionsIntType, 
  OptionsStringType 
} = require('./index');



const StartingEquipmentType = new GraphQLObjectType({
  name: 'StartEquip',

  fields: () => ({
    class: { type: GraphQLString },
    starting_equipment: { type: new GraphQLList(NameQuantType) },
    choices: { type: new GraphQLList(EquipChoicesType) }
  })
});



module.exports = {
  StartingEquipmentType
};