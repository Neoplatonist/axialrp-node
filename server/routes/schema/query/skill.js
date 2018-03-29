const { GraphQLList, GraphQLString } = require('graphql');
const { SkillType } = require('../type/skill');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Race Query
const getSkills = {
  type: new GraphQLList(SkillType),
  description: 'GETS all Skills',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getSkills());
    }, 200))
  }
};

const getSkillName = {
  type: SkillType,
  args: { name: { type: GraphQLString } },
  description: 'GETS one Skill by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getSkillName(args.name));
    }, 200))
  }
};

module.exports = {
  getSkills,
  getSkillName
};