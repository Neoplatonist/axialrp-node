module.exports = `
  type SchoolOfMagic {
    id: ID!
    name: String
    description: String!
  }

  type Query {
    getSchoolOfMagic: [SchoolOfMagic!]!
    getSchoolOfMagicByName(name: String!): SchoolOfMagic!
  }

  type Mutation {
    addSchoolOfMagic(name: String!, description: String!): SchoolOfMagic!
    removeSchoolOfMagic(id: ID!): ID!
  }
`