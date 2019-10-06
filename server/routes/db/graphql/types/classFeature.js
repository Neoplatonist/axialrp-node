module.exports = `
  type ClassOptions {
    name: String,
    description: [String]
  }

  type ClassChoices {
    choose: Int,
    options: [ClassOptions]
  }

  type ClassFeature {
    id: ID!
    name: String!
    description: String!
    classes: [String!]!
    choices: ClassChoices
  }

  input ClassOptionsInput {
    name: String,
    description: [String]
  }

  input ClassChoicesInput {
    choose: Int,
    options: [ClassOptionsInput]
  }

  input ClassFeatureInput {
    id: ID!
    name: String!
    description: String!
    classes: [String!]!
    choices: ClassChoicesInput
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
