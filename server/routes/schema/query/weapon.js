const { GraphQLList, GraphQLString } = require('graphql');
const { WeaponType } = require('../type/weapon');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getWeapons = {
  type: new GraphQLList(WeaponType),

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getWeapons());
    }, 200))
  }
};

const getWeaponName = {
  type: WeaponType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getWeaponName(args.name));
    }, 200))
  }
};

module.exports = {
  getWeapons,
  getWeaponName
};