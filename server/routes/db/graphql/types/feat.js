module.exports = `
  type Prerequisite {
    ability: String!
    abilityScore: Int!
  }

  input PrerequisiteInput {
    ability: String!
    abilityScore: Int!
  }

  type Feat {
    id: ID!
    name: String!
    description: String!
    prerequisite: Prerequisite!
    benefits: [String!]!
  }

  input FeatInput {
    name: String!
    description: String!
    prerequisite: PrerequisiteInput!
    benefits: [String!]!
  }

  type Query {
    getFeat: [Feat!]!
    getFeatByName(name: String!): Feat!
  }

  type Mutation {
    addFeat(feat: FeatInput!): Alignment!
    removeFeat(id: ID!): ID!
  }
`