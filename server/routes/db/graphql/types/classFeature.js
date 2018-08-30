module.exports = `
  type ClassFeature {
    id: ID!
    name: String!
    description: String!
    classes: [String!]!
  }


  input ClassFeatureInput {
    name: String!
    description: String!
    classes: [String!]!
  }

  type Query {
    getClassFeatures: [ClassFeature!]!
    getClassFeatureByName(name: String!): ClassFeature!
  }

  type Mutation {
    addClassFeature(feature: ClassFeatureInput!): ClassFeature!
    removeClassFeature(id: ID!): ID!
  }
`