const { GraphQLObjectType } = require('graphql');
const { getAlignments, getAlignmentName } = require('./alignment.js');
const { getArmors, getArmorName } = require('./armor.js');
const { getClasses, getClassName } = require('./class.js');
const { getFeats, getFeatName } = require('./feat.js');
const { getGears, getGearName } = require('./gear.js');
const { getKits, getKitName } = require('./kit.js');
const { getMounts, getMountName } = require('./mount.js');
const { getRaces, getRaceName } = require('./race.js');
const { getSchoOfMags, getSchoOfMagName } = require('./schoOfMag.js');
const { getSkills, getSkillName } = require('./skill.js');
const { getSpellName } = require('./spell.js');
const { getStartEquips, getStartEquipName } = require('./startEquip.js');
const { getSubRaces, getSubRaceName } = require('./subrace.js');
const { getTools, getToolName } = require('./tool.js');
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
    getGears: getGears,
    getGearName: getGearName,
    getKits: getKits,
    getKitName: getKitName,
    getMounts: getMounts,
    getMountName: getMountName,
    getRaces: getRaces,
    getRaceName: getRaceName,
    getSchoOfMags: getSchoOfMags,
    getSchoOfMagName: getSchoOfMagName,
    getSkills: getSkills,
    getSkillName: getSkillName,
    getSpellName: getSpellName,
    getStartEquips: getStartEquips,
    getStartEquipName: getStartEquipName,
    getSubRaces: getSubRaces,
    getSubRaceName: getSubRaceName,
    getTools: getTools,
    getToolName: getToolName,
    getWeapons: getWeapons,
    getWeaponName: getWeaponName
  }
});



module.exports = {
  RootQuery
};