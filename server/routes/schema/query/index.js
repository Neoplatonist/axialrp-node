const { GraphQLObjectType } = require('graphql');
const { getAlignmentName } = require('./alignment.js');
const { getArmorName } = require('./armor.js');
const { getClassName } = require('./class.js');
const { getFeatName } = require('./feat.js');
const { getGearName } = require('./gear.js');
const { getKitName } = require('./kit.js');
const { getMountName } = require('./mount.js');
const { getRaceName } = require('./race.js');
const { getSchoOfMagName } = require('./schoOfMag.js');
const { getSkillName } = require('./skill.js');
const { getSpellName } = require('./spell.js');
const { getStartEquipName } = require('./startEquip.js');
const { getSubRaceName } = require('./subrace.js');
const { getToolName } = require('./tool.js');
const { getWeaponName } = require('./weapon.js');



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAlignmentName: getAlignmentName,
    getArmorName: getArmorName,
    getClassName: getClassName,
    getFeatName: getFeatName,
    getGearName: getGearName,
    getKitName: getKitName,
    getMountName: getMountName,
    getRaceName: getRaceName,
    getSchoOfMagName: getSchoOfMagName,
    getSkillName: getSkillName,
    getSpellName: getSpellName,
    getStartEquipName: getStartEquipName,
    getSubRaceName: getSubRaceName,
    getToolName: getToolName,
    getWeaponName: getWeaponName
  }
});



module.exports = {
  RootQuery
};