module.exports = `
  type Mount {
    id: ID!
    name: String!
    category: String!
    cost: Cost!
    speed: Cost!
    capacity: String!
  }

  input MountInput {
    name: String!
    category: String!
    cost: CostInput!
    speed: CostInput!
    capacity: String!
  }

  type Query {
    getMounts: [Mount!]!
    getMountByName(name: String!): Mount!
  }

  type Mutation {
    addMount(mount: MountInput!): Mount!
    removeMount(id: ID!): ID!
  }
`