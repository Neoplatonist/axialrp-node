const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');
const { 
  EquipChoicesType,
  NameDescType,
  NameQuantType
} = require('./index');



const StartingEquipmentType = new GraphQLObjectType({
  name: 'StartEquip',
  description: 'Starting Equipment database structure',

  fields: () => ({
    class: { type: GraphQLString },
    starting_equipment: { type: new GraphQLList(NameQuantType) },
    choices: { type: new GraphQLList(EquipChoicesType) }
  })
});



module.exports = {
  StartingEquipmentType
};