const db = require('./db');

db()







class MyDB{
  // async getAlignments() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Alignment)
  //   }, 200));
  // }

  // async getAlignments() {
  //   const collection = db.session.collection('alignment')

  //   return await collection.find({}).toArray((err, docs) => {
  //     assert.equal(err, null)

  //     return docs
  //   })
  // }

  // async getAlignmentName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Alignment.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getArmors() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Armor)
  //   }, 200));
  // }

  // async getArmorName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Armor.find(v => v.name === name))
  //   }, 200));
  // }

  // async getArmorByCategory(category) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Armor.filter(v => v.category === category))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getClasses() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Class)
  //   }, 200));
  // }

  // async getClassName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Class.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getClassFeatures() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.ClassFeature)
  //   }, 200));
  // }

  // async getClassFeatureName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.ClassFeature.find(v => v.name === name))
  //   }, 200));
  // }

  // async getClassFeatureClass(clas) {
  //   return new Promise(res => setTimeout(() => {
  //     const data = db.ClassFeature.reduce((p, c) => {
  //       const test = c.classes.some(v => v === clas);

  //       if (test) {
  //         p.push(c);
  //       }

  //       return p;
  //     }, []);

  //     res(data);
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getFeats() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Feat)
  //   }, 200));
  // }

  // async getFeatName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Feat.find(v => v.name === name))
  //   }, 200));
  // }  
  // /* ---------------------------------------- */
  // async getGears() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Gear)
  //   }, 200));
  // }

  // async getGearName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Gear.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getKits() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Kit)
  //   }, 200));
  // }

  // async getKitName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Kit.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getMounts() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Mount)
  //   }, 200));
  // }

  // async getMountName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Mount.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getRaces() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Race)
  //   }, 200));
  // }

  // async getRaceName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Race.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getSchoOfMags() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.SchoolOfMagic)
  //   }, 200));
  // }

  // async getSchoOfMagName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.SchoolOfMagic.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getSkills() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Skill)
  //   }, 200));
  // }

  // async getSkillName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Skill.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getSpells() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Spell)
  //   }, 200));
  // }

  // async getSpellName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Spell.find(v => v.name === name))
  //   }, 200));
  // }

  // async getSpellByClass(clas) {
  //   return new Promise(res => setTimeout(() => {
  //     res([].concat(...db.Spell.map(v => 
  //       v.classes.some(f => f.name === clas) ? v : [])))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getSubRaces() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Subrace)
  //   }, 200));
  // }

  // async getSubRaceName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Subrace.find(v => v.name === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getStartEquips() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.StartingEquipment)
  //   }, 200));
  // }

  // async getStartEquipName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.StartingEquipment.find(v => v.class === name))
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getTools() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Tool)
  //   }, 200));
  // }

  // async getToolName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Tool.find(v => v.name === name))
  //   }, 200));
  // }
  // async getWeapons() {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Weapon)
  //   }, 200));
  // }
  // /* ---------------------------------------- */
  // async getWeaponName(name) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Weapon.find(v => v.name === name))
  //   }, 200));
  // }

  // async getWeaponByCategory(category) {
  //   return new Promise(res => setTimeout(() => {
  //     res(db.Weapon.filter(v => v.category === category))
  //   }, 200));
  // }
}

module.exports = {
  MyDB
};