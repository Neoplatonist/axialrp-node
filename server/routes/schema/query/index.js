const { GraphQLObjectType } = require('graphql');
const { getAlignments, getAlignmentName } = require('./alignment.js');
const { getArmors, getArmorName } = require('./armor.js');
const { getClasses, getClassName } = require('./class.js');
const { getFeats, getFeatName } = require('./feat.js');
const { getGearName } = require('./gear.js');
const { getKitName } = require('./kit.js');
const { getMountName } = require('./mount.js');
const { getRaces, getRaceName } = require('./race.js');
const { getSchoOfMagName } = require('./schoOfMag.js');
const { getSkills, getSkillName } = require('./skill.js');
const { getSpellName } = require('./spell.js');
const { getStartEquipName } = require('./startEquip.js');
const { getSubRaces, getSubRaceName } = require('./subrace.js');
const { getToolName } = require('./tool.js');
const { getWeapons, getWeaponName } = require('./weapon.js');



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAlignments: getAlignments,
    getAlignmentName: getAlignmentName,
    getArmors: getArmors,
    getArmorName: getArmorName,
    getClasses: getClasses,
    getClassName: getClassName,
    getFeats: getFeats,
    getFeatName: getFeatName,
    getGearName: getGearName,
    getKitName: getKitName,
    getMountName: getMountName,
    getRaces: getRaces,
    getRaceName: getRaceName,
    getSchoOfMagName: getSchoOfMagName,
    getSkills: getSkills,
    getSkillName: getSkillName,
    getSpellName: getSpellName,
    getStartEquipName: getStartEquipName,
    getSubRaces: getSubRaces,
    getSubRaceName: getSubRaceName,
    getToolName: getToolName,
    getWeapons: getWeapons,
    getWeaponName: getWeaponName
  }
});



module.exports = {
  RootQuery
};