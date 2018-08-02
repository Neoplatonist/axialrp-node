module.exports = `
  type ArmorClass {
    base: Int!
    dexBonus: Int!
    maxBonus: Int!
  }

  input ArmorClassInput {
    base: Int!
    dexBonus: Int!
    maxBonus: Int
  }

  type ArmorCost {
    quantity: Int!
    unit: String!
  }

  input ArmorCostInput {
    quantity: Int!
    unit: String!
  }

  type Armor {
    id: ID!
    name: String!
    category: String!
    armorClass: ArmorClass!
    strMinimum: Int!
    stealthDisadvantage: Boolean!
    weight: Int!
    cost: ArmorCost!
  }

  input AddArmorInput {
    name: String!
    category: String!
    armorClass: ArmorClassInput!
    strMinimum: Int!
    stealthDisadvantage: Boolean!
    weight: Int!
    cost: ArmorCostInput!
  }

  type Query {
    getArmor: [Armor]!
    getArmorByName(name: String!): Armor!
    getArmorByCategory(category: String!): [Armor]!
  }

  type Mutation {
    addArmor(armor: AddArmorInput!): Armor!
    removeArmor(id: ID!): ID!
  }
`