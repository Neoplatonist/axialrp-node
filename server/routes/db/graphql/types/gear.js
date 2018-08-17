module.exports = `
  type Gear {
    id: ID!
    name: String!
    category: String!
    cost: Cost!
    weight: Int!
  }

  input GearInput {
    id: ID!
    name: String!
    category: String!
    cost: CostInput!
    weight: Int!
  }

  type Query {
    getGear: [Gear!]!
    getGearByName(name: String!): Gear!
  }

  type Mutation {
    addGear(gear: GearInput!): Gear!
    removeGear(id: ID!): ID!
  }
`