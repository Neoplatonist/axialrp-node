const { GraphQLString } = require('graphql');
const { StartingEquipmentType } = require('../type/startEquip');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getStartEquipName = {
  type: StartingEquipmentType,
  args: { class: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getStartEquipName(args.class));
    }, 200))
  }
};

module.exports = {
  getStartEquipName
};