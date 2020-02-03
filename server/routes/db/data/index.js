const Alignment = require('./alignment')
const Armor = require('./armor')
const Class = require('./class')
const ClassFeature = require('./classFeature')
const Feat =  require('./feat')
const Gear = require('./gear')
const Kit = require('./kit')
const Mount = require('./mount')

// Need to consolidate
const Race = require('./race')

const SchoolOfMagic = require('./schoolOfMagic')
const Skill = require('./skill')
const Spell = require('./spell')
const StartingEquipment = require('./startingEquipment')
const Subrace = require('./subrace')
const Tool = require('./tool')
const Weapon = require('./weapon')

module.exports = {
  alignmentDB: Alignment,
  armorDB: Armor,
  classDB: Class,
  classFeatureDB: ClassFeature,
  featDB: Feat,
  gearDB: Gear,
  kitDB: Kit,
  mountDB: Mount,
  raceDB: Race,
  schoolOfMagicDB: SchoolOfMagic,
  skillDB: Skill,
  spellDB: Spell,
  startingEquipmentDB: StartingEquipment,
  subraceDB: Subrace,
  toolDB: Tool,
  weaponDB: Weapon,
}