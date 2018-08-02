module.exports = `
  type ClassFeature {
    id: ID!
    name: String!
    description: String!
    classes: [String!]!
  }

  type Query {
    getClassFeatures: [ClassFeature]!
    getClassFeatureByName(name: String!): ClassFeature!
  }

  input ClassFeatureInput {
    name: String!
    description: String!
    classes: [String!]!
  }

  type Mutation {
    addClassFeature(feature: ClassFeatureInput!): ClassFeature!

    removeClassFeature(id: ID!): ID!
  }
`