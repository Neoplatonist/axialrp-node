const { GraphQLString } = require('graphql');
const { SkillType } = require('../type/skill');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSkillName = {
  type: SkillType,
  args: { name: { type: GraphQLString } },

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSkillName(args.name));
    }, 200))
  }
};

module.exports = {
  getSkillName
};