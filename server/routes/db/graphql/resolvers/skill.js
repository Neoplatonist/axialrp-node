module.exports = {
  Query: {
    getSkills: (_, __, { db }) => db.Skill.getSkills(),
    getSkillByName: (_, { name }, { db }) => db.Skill.getSkillByName(name)
  },

  Mutation: {
    addSkill: (_, args, { db }) => db.Skill.addSkill(args),
    removeSkill: (_, args, { db }) => db.Skill.removeSkill(args)
  }
}