module.exports = `
  type Kit {
    id: ID!
    name: String!
    category: String!
    cost: Cost!
    weight: Int!
    description: [String!]!
  }

  input KitInput {
    id: ID!
    name: String!
    category: String!
    cost: CostInput!
    weight: Int!
    description: [String!]!
  }

  type Query {
    getKits: [Kit!]!
    getKitByName(name: String!): Kit!
  }

  type Mutation {
    addKit(kit: KitInput!): Kit!
    removeKit(id: ID!): ID!
  }
`