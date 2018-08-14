const Alignment = require('./alignment')
const Armor = require('./armor')
const Class = require('./class')
const ClassFeature = require('./classFeature')
const Feat =  require('./feat')
const Gear = require('./gear')
const Kit = require('./kit')

module.exports = {
  alignmentDB: Alignment,
  armorDB: Armor,
  classDB: Class,
  classFeatureDB: ClassFeature,
  featDB: Feat,
  gearDB: Gear,
  kitDB: Kit,
}