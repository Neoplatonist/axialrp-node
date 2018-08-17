module.exports = `
  type Spell {
    id: ID!
    name: String!
    description: [String!]!
    higherLevel: [String!]!
    range: String!
    components: [String!]!
    material: String!
    ritual: Boolean!
    duration: String!
    concentration: Boolean!
    castingTime: String!
    level: Int!
    school: String!
    classes: [NameList!]!
    subclasses: [NameList!]!
  }

  input SpellInput {
    name: String!
    description: [String!]!
    higherLevel: [String!]!
    range: String!
    components: [String!]!
    material: String!
    ritual: Boolean!
    duration: String!
    concentration: Boolean!
    castingTime: String!
    level: Int!
    school: String!
    classes: [NameListInput!]!
    subclasses: [NameListInput!]!
  }

  type Query {
    getSpells: [Spell!]!
    getSpellByName(name: String!): Spell!
  }

  type Mutation {
    addSpell(spell: SpellInput!): Spell!
    removeSpell(id: ID!): ID!
  }
`