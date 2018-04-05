const db = require('./db');

class MyDB{
  async getRaces() {
    return new Promise(res => setTimeout(() => {
      res(db.Race)
    }, 200));
  }

  async getRaceName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Race.find(v => v.name === name))
    }, 200));
  }
/* ---------------------------------------- */
  async getSubRaces() {
    return new Promise(res => setTimeout(() => {
      res(db.Subrace)
    }, 200));
  }

  async getSubRaceName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Subrace.find(v => v.name === name))
    }, 200));
  }
/* ---------------------------------------- */
  async getAlignments() {
    return new Promise(res => setTimeout(() => {
      res(db.Alignment)
    }, 200));
  }

  async getAlignmentName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Alignment.find(v => v.name === name))
    }, 200));
  }
/* ---------------------------------------- */
  async getClasses() {
    return new Promise(res => setTimeout(() => {
      res(db.Class)
    }, 200));
  }

  async getClassName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Class.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getFeats() {
    return new Promise(res => setTimeout(() => {
      res(db.Feat)
    }, 200));
  }

  async getFeatName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Feat.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getSkills() {
    return new Promise(res => setTimeout(() => {
      res(db.Skill)
    }, 200));
  }

  async getSkillName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Skill.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getWeapons() {
    return new Promise(res => setTimeout(() => {
      res(db.Weapon)
    }, 200));
  }

  async getWeaponName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Weapon.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getArmors() {
    return new Promise(res => setTimeout(() => {
      res(db.Armor)
    }, 200));
  }

  async getArmorName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Armor.find(v => v.name === name))
    }, 200));
  }

  async getArmorByCategory(category) {
    console.log('line 101', category)
    return new Promise(res => setTimeout(() => {
      res(db.Armor.filter(v => v.category === category))
    }, 200));
  }
  /* ---------------------------------------- */
  async getGears() {
    return new Promise(res => setTimeout(() => {
      res(db.Gear)
    }, 200));
  }

  async getGearName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Gear.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getKits() {
    return new Promise(res => setTimeout(() => {
      res(db.Kit)
    }, 200));
  }

  async getKitName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Kit.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getTools() {
    return new Promise(res => setTimeout(() => {
      res(db.Tool)
    }, 200));
  }

  async getToolName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Tool.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getStartEquips() {
    return new Promise(res => setTimeout(() => {
      res(db.StartingEquipment)
    }, 200));
  }

  async getStartEquipName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.StartingEquipment.find(v => v.class === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getMounts() {
    return new Promise(res => setTimeout(() => {
      res(db.Mount)
    }, 200));
  }

  async getMountName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Mount.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getSchoOfMags() {
    return new Promise(res => setTimeout(() => {
      res(db.SchoolOfMagic)
    }, 200));
  }

  async getSchoOfMagName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.SchoolOfMagic.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getSpells() {
    return new Promise(res => setTimeout(() => {
      res(db.Spell)
    }, 200));
  }

  async getSpellName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Spell.find(v => v.name === name))
    }, 200));
  }
}
  
module.exports = {
  MyDB
};