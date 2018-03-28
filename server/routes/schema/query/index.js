const { GraphQLObjectType } = require('graphql');
const { getAlignmentName } = require('./alignment.js');
// const Armor = require('./armor.js');
const { getClassName } = require('./class.js');
const { getFeatName } = require('./feat.js');
// const Gear = require('./gear.js');
// const Kit = require('./kit.js');
// const Mount = require('./mount.js');
const { getRaceName } = require('./race.js');
// const SchoolOfMagic = require('./schoolofmagic.js');
const { getSkillName } = require('./skill.js');
// const Spell = require('./spell.js');
// const StartingEquipment = require('./startingequipment.js');
const { getSubRaceName } = require('./subrace.js');
// const Tool = require('./tool.js');
// const Weapon = require('./weapon.js');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAlignmentName: getAlignmentName,
    // armor: Armor,
    getClassName: getClassName,
    getFeatName: getFeatName,
    // gear: Gear,
    // kit: Kit,
    // mount: Mount,
    getRaceName: getRaceName,
    // schoolOfMagic: SchoolOfMagic,
    getSkillName: getSkillName,
    // spell: Spell,
    // startingEquipment: StartingEquipment,
    getSubRaceName: getSubRaceName,
    // tool: Tool,
    // weapon: Weapon
  }
});

module.exports = {
  RootQuery
};