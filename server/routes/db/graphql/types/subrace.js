module.exports = `
  type Subrace {
    id: ID!
    name: String!
    description: String!
    abilityBonus: [Int!]!
    hitPoints: Int
    age: RaceAge
    size: RaceSize
    speed: RaceSpeed
    languages: RaceLanguages
    traits: [NameDescList]
    savingThrows: RaceSavingThrows
    tools: OptionsString
    weapons: [String]
  }

  input SubraceInput {
    id: ID!
    name: String!
    description: String!
    abilityBonus: [Int!]!
    hitPoints: Int
    age: RaceAgeInput
    size: RaceSizeInput
    speed: RaceSpeedInput
    languages: RaceLanguagesInput
    traits: [NameDescListInput]
    savingThrows: RaceSavingThrowsInput
    tools: OptionsStringInput
    weapons: [String]
  }

  type Query {
    getSubraces: [Subrace!]!
    getSubraceByName(name: String!): Subrace!
  }

  type Mutation {
    addSubrace(subrace: SubraceInput): Subrace!
    removeSubrace(id: ID!): ID!
  }
`