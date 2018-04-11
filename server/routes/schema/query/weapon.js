const { GraphQLList, GraphQLString } = require('graphql');
const { WeaponType } = require('../type/weapon');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getWeapons = {
  type: new GraphQLList(WeaponType),
  description: 'GETS all Weapons',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getWeapons());
    }, 200))
  }
};

const getWeaponByCategory = {
  type: new GraphQLList(WeaponType),
  args: { category: { type: GraphQLString } },
  description: 'GETS all Weapons by Category',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getWeaponByCategory(args.category));
    }, 200))
  }
};

const getWeaponName = {
  type: WeaponType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Weapon by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getWeaponName(args.name));
    }, 200))
  }
};

module.exports = {
  getWeapons,
  getWeaponByCategory,
  getWeaponName
};