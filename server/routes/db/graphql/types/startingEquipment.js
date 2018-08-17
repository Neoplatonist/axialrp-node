module.exports = `
  type SENameQuant {
    name: String!
    quantity: Int!
  }

  input SENameQuantInput {
    name: String!
    quantity: Int!
  }

  type StartingOptions {
    choose: Int!
    type: String!
    from: [SENameQuant!]!
  }

  input StartingOptionsInput {
    choose: Int!
    type: String!
    from: [SENameQuantInput!]!
  }

  type StartingEquipChoices {
    choice: [StartingOptions!]!
  }

  input StartingEquipChoicesInput {
    choice: [StartingOptionsInput!]!
  }

  type StartingEquipment {
    id: ID!
    class: String!
    startingEquipment: [SENameQuant!]!
    choices: [StartingEquipChoices!]!
  }

  input StartingEquipmentInput {
    id: ID!
    class: String!
    startingEquipment: [SENameQuantInput!]!
    choices: [StartingEquipChoicesInput!]!
  }

  type Query {
    getStartingEquipment: [StartingEquipment!]!
    getStartingEquipmentByName(name: String!): StartingEquipment!
  }

  type Mutation {
    addStartingEquipment(startEquip: StartingEquipmentInput!): StartingEquipment!
    removeStartingEquipment(id: ID!): ID!
  }
`