module.exports = `
  type ArmorClass {
    base: Int!
    dexBonus: Int!
    maxBonus: Int!
  }

  type ArmorCost {
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

  type Query {
    getArmor: [Armor]!
    getArmorByName(name: String!): Armor!
    getArmorByCategory(category: String!): [Armor]!
  }

  type AddTypeArmor {
    addMyArmor(
      name: String!
      category: String!
      armorClass: ArmorClass!
      strMinimum: Int!
      stealthDisadvantage: Boolean!
      weight: Int!
      cost: ArmorCost!
    ): Armor!
  }

  type Mutation {
    addArmor: AddTypeArmor
    removeArmor(id: ID!): ID!
  }
`