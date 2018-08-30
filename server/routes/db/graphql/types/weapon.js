module.exports = `
  type WeaponRangeType {
    type: String
    normal: Int
    long: Int
  }

  input WeaponRangeTypeInput {
    type: String
    normal: Int
    long: Int
  }

  type WeaponRange {
    name: String
    rangeType: [WeaponRangeType]
  }

  input WeaponRangeInput {
    name: String
    rangeType: [WeaponRangeTypeInput]
  }

  type WeaponDamage {
    name: String!
    diceCount: Int!
    diceValue: Int!
    type: String!
  }

  input WeaponDamageInput {
    name: String!
    diceCount: Int!
    diceValue: Int!
    type: String!
  }

  type Weapon {
    id: ID!
    name: String!
    category: String!
    range: WeaponRange
    cost: Cost!
    damage: [WeaponDamage!]!
    weight: String!
    properties: [NameList!]!
  }

  input WeaponInput {
    name: String!
    category: String!
    range: WeaponRangeInput
    cost: CostInput!
    damage: [WeaponDamageInput!]!
    weight: String!
    properties: [NameListInput!]!
  }

  type Query {
    getWeapons: [Weapon!]!
    getWeaponByName(name: String!): Weapon!
  }

  type Mutation {
    addWeapon(weapon: WeaponInput!): Weapon!
    removeWeapon(id: ID!): ID!
  }
`