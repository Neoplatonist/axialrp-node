const db = require('./db');

class MyDB{
  async getRaceAll() {
    return new Promise(res => setTimeout(() => {
      res(parse.JSON(db.Race))
    }, 200));
  }

  async getRaceName(name) {
    return new Promise(res => setTimeout(() => {
      res(db.Race.find(v => v.name === name))
    }, 200));
  }
}
  
module.exports = {
  MyDB
};