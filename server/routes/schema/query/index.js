const { GraphQLObjectType } = require('graphql');
const { getAlignmentName } = require('./alignment.js');
const { getArmorName } = require('./armor.js');
const { getClassName } = require('./class.js');
const { getFeatName } = require('./feat.js');
const { getGearName } = require('./gear.js');
// const Kit = require('./kit.js');
// const Mount = require('./mount.js');
const { getRaceName } = require('./race.js');
// const SchoolOfMagic = require('./schoolofmagic.js');
const { getSkillName } = require('./skill.js');
// const Spell = require('./spell.js');
// const StartingEquipment = require('./startingequipment.js');
const { getSubRaceName } = require('./subrace.js');
// const Tool = require('./tool.js');
const { getWeaponName } = require('./weapon.js');



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAlignmentName: getAlignmentName,
    getArmorName: getArmorName,
    getClassName: getClassName,
    getFeatName: getFeatName,
    getGearName: getGearName,
    // kit: Kit,
    // mount: Mount,
    getRaceName: getRaceName,
    // schoolOfMagic: SchoolOfMagic,
    getSkillName: getSkillName,
    // spell: Spell,
    // startingEquipment: StartingEquipment,
    getSubRaceName: getSubRaceName,
    // tool: Tool,
    getWeaponName: getWeaponName
  }
});



module.exports = {
  RootQuery
};