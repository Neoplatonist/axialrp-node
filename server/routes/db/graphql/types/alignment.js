module.exports = `
  type Alignment {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    alignments: [Alignment]!
    alignment(name: String!): Alignment!
  }

  type Mutation {
    addAlignment(name: String! description: String!): Alignment!
    removeAlignment(id: ID!): ID!
  }
`