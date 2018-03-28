const db = require('./db');

class MyDB{
  async getRaceAll() {
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
  async getSubRaceAll() {
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
  async getAlignmentAll() {
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
  async getClassAll() {
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
  async getFeatAll() {
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
  async getSkillAll() {
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
  async getWeaponAll() {
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
  async getArmorAll() {
    return new Promise(res => setTimeout(() => {
      res(db.Armor)
    }, 200));
  }

  async getArmorName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Armor.find(v => v.name === name))
    }, 200));
  }
  /* ---------------------------------------- */
  async getGearAll() {
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
  async getKitAll() {
    return new Promise(res => setTimeout(() => {
      res(db.Kit)
    }, 200));
  }

  async getKitName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Kit.find(v => v.name === name))
    }, 200));
  }
}
  
module.exports = {
  MyDB
};