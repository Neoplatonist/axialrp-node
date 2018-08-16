const Alignment = require('./alignment')
const Armor = require('./armor')
const Class = require('./class')
const ClassFeature = require('./classFeature')
const Feat =  require('./feat')
const Gear = require('./gear')
const Kit = require('./kit')
// Not implemented - see mount.js for details
const Mount = require('./mount')

// Need to consolidate
const Race = require('./race')
const SchoolOfMagic = require('./schoolOfMagic')

module.exports = {
  alignmentDB: Alignment,
  armorDB: Armor,
  classDB: Class,
  classFeatureDB: ClassFeature,
  featDB: Feat,
  gearDB: Gear,
  kitDB: Kit,
  raceDB: Race,
  schoolOfMagicDB: SchoolOfMagic,
}