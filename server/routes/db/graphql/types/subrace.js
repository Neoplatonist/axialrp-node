module.exports = `
  type Subrace {
    id: ID!
    name: String!
    description: String!
    abilityBonus: [Int!]!
    hitPoints: Int
  }

  input SubraceInput {
    name: String!
    description: String!
    abilityBonus: [Int!]!
    hitPoints: Int
  }

  type Query {
    getSubraces: [Subrace!]!
    getSubraceByName(name: String!): Subrace!
  }

  type Mutation {
    addSubrace(subrace: SubraceInput): Subrace!
    removeSubrace(id: ID!): ID!
  }
`