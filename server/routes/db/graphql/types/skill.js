module.exports = `
  type Skill {
    id: ID!
    name: String!
    description: String!
    abilityScore: NameList!
  }

  input SkillInput {
    name: String!
    description: String!
    abilityScore: NameListInput!
  }

  type Query {
    getSkills: [Skill!]!
    getSkillByName(name: String!): Skill!
  }

  type Mutation {
    addSkill(skill: SkillInput!): Skill!
    removeSkill(id: ID!): ID!
  }
`