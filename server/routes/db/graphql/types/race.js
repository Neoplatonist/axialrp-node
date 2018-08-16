module.exports = `
  type Age {
    adult: Int!
    description: String!
    max: Int!
  }

  input AgeInput {
    adult: Int!
    description: String!
    max: Int!
  }

  type RaceAlignment {
    description: String!
    main: String!
  }

  input RaceAlignmentInput {
    description: String!
    main: String!
  }

  type RaceHeight {
    min: Int!
    max: Int!
  }

  input RaceHeightInput {
    min: Int!
    max: Int!
  }

  type RaceSize {
    description: String!
    height: RaceHeight!
  }

  input RaceSizeInput {
    description: String!
    height: RaceHeightInput!
  }

  type RaceSpeed {
    base: Int!
    description: String!
  }

  input RaceSpeedInput {
    base: Int!
    description: String!
  }

  type RaceLanguages {
    description: String!
    options: OptionsString!
    type: [NameList!]!
  }

  input RaceLanguagesInput {
    description: String!
    options: OptionsStringInput!
    type: [NameListInput!]!
  }

  type RaceTraits {
    options: OptionsString
    type: [NameList]
  }

  input RaceTraitsInput {
    options: OptionsStringInput
    type: [NameListInput]
  }

  type RaceSavingThrows {
    against: String
    description: String
  }

  input RaceSavingThrowsInput {
    against: String
    description: String
  }

  type Race {
    id: ID!
    name: String!
    description: String!
    abilityBonus: [Int!]!
    age: Age!
    alignment: RaceAlignment!
    size: RaceSize!
    speed: RaceSpeed!
    languages: RaceLanguages!
    traits: RaceTraits
    subRaces: [NameList]
    savingThrows: RaceSavingThrows!
    tools: OptionsString!
    weapons: [String!]!
  }

  input RaceInput {
    id: ID!
    name: String!
    description: String!
    abilityBonus: [Int!]!
    age: AgeInput!
    alignment: RaceAlignmentInput!
    size: RaceSizeInput!
    speed: RaceSpeedInput!
    languages: RaceLanguagesInput!
    traits: RaceTraitsInput
    subRaces: [NameListInput]
    savingThrows: RaceSavingThrowsInput!
    tools: OptionsStringInput!
    weapons: [String!]!
  }

  type Query {
    getRaces: [Race!]!
    getRaceByName(name: String!): Race!
  }

  type Mutation {
    addRace(race: RaceInput!): Race!
    removeRace(id: ID!): ID!
  }
`