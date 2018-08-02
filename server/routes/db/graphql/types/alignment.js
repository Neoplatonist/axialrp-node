module.exports = `
  type Alignment {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    getAlignments: [Alignment]!
    getAlignmentByName(name: String!): Alignment!
  }

  type Mutation {
    addAlignment(name: String!, description: String!): Alignment!
    removeAlignment(id: ID!): ID!
  }
`