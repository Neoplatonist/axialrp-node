/* eslint-disable no-useless-escape */

const { alignmentDB } = require('./alignmentDB');
const { armorDB } = require('./armorDB');
const { classDB } = require('./classDB');
const { classFeatureDB } = require('./classFeatureDB');
const { featDB } = require('./featDB');
const { gearDB } = require('./gearDB');
const { kitDB } = require('./kitDB');
const { mountDB } = require('./mountDB');
const { raceDB } = require('./raceDB');
const { schoolOfMagicDB } = require('./schoolOfMagicDB');
const { skillDB } = require('./skillDB');
const { spellDB } = require('./spellDB');
const { startingEquipmentDB } = require('./startingEquipmentDB');
const { subraceDB } = require('./subraceDB');
const { toolDB } = require('./toolDB');
const { weaponDB } = require('./weaponDB');

module.exports = {
  Alignment: alignmentDB,
  Armor: armorDB,
  Class: classDB,
  ClassFeature: classFeatureDB,
  Feat: featDB,
  Gear: gearDB,
  Kit: kitDB,
  Mount: mountDB,
  Race: raceDB,
  SchoolOfMagic: schoolOfMagicDB,
  Skill: skillDB,
  Spell: spellDB,
  StartingEquipment: startingEquipmentDB,
  Subrace: subraceDB,
  Tool: toolDB,
  Weapon: weaponDB
}