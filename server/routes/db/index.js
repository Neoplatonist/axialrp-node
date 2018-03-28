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
}
  
module.exports = {
  MyDB
};