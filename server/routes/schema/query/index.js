const { GraphQLObjectType } = require('graphql');
// const Alignment = require('./alignment.js');
// const Armor = require('./armor.js');
// const Class = require('./class.js');
// const Feat = require('./feat.js');
// const Gear = require('./gear.js');
// const Kit = require('./kit.js');
// const Mount = require('./mount.js');
const { getRaceName } = require('./race.js');
// const SchoolOfMagic = require('./schoolofmagic.js');
// const Skill = require('./skill.js');
// const Spell = require('./spell.js');
// const StartingEquipment = require('./startingequipment.js');
// const Subrace = require('./subrace.js');
// const Tool = require('./tool.js');
// const Weapon = require('./weapon.js');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // alignment: Alignment,
    // armor: Armor,
    // class: Class,
    // feat: Feat,
    // gear: Gear,
    // kit: Kit,
    // mount: Mount,
    getRaceName: getRaceName,
    // schoolOfMagic: SchoolOfMagic,
    // skill: Skill,
    // spell: Spell,
    // startingEquipment: StartingEquipment,
    // subrace: Subrace,
    // tool: Tool,
    // weapon: Weapon
  }
});

module.exports = {
  RootQuery
};