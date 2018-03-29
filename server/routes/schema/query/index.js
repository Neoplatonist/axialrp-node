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
const { getSpells, getSpellName } = require('./spell.js');
const { getStartEquips, getStartEquipName } = require('./startEquip.js');
const { getSubRaces, getSubRaceName } = require('./subrace.js');
const { getTools, getToolName } = require('./tool.js');
const { getWeapons, getWeaponName } = require('./weapon.js');



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Allows retrieving data',

  fields: {
    getAlignments,
    getAlignmentName,
    getArmors,
    getArmorName,
    getClasses,
    getClassName,
    getFeats,
    getFeatName,
    getGears,
    getGearName,
    getKits,
    getKitName,
    getMounts,
    getMountName,
    getRaces,
    getRaceName,
    getSchoOfMags,
    getSchoOfMagName,
    getSkills,
    getSkillName,
    getSpells,
    getSpellName,
    getStartEquips,
    getStartEquipName,
    getSubRaces,
    getSubRaceName,
    getTools,
    getToolName,
    getWeapons,
    getWeaponName
  }
});



module.exports = {
  RootQuery
};