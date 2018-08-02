module.exports = `
  type ClassLevel {
    cantrips: Int
    features: [String!]!
    invocationsKnown: Int
    kiPoints: Int
    martialArts: String
    proficiencyBonus: Int!
    rages: String
    rageDamage: Int
    sneakAttack: String
    sorceryPoints: Int
    slotLevel: Int
    spellsKnown: Int
    spellSlots: Int
    type: [Int]
    unarmoredMovement: String
  }

  input ClassLevelInput {
    cantrips: Int
    features: [String]!
    invocationsKnown: Int
    kiPoints: Int
    martialArts: String
    proficiencyBonus: Int!
    rages: String
    rageDamage: Int
    sneakAttack: String
    sorceryPoints: Int
    slotLevel: Int
    spellsKnown: Int
    spellSlots: Int
    type: [Int]
    unarmoredMovement: String
  }

  type Level {
    _1: ClassLevel!
    _2: ClassLevel!
    _3: ClassLevel!
    _4: ClassLevel!
    _5: ClassLevel!
    _6: ClassLevel!
    _7: ClassLevel!
    _8: ClassLevel!
    _9: ClassLevel!
    _10: ClassLevel!
    _11: ClassLevel!
    _12: ClassLevel!
    _13: ClassLevel!
    _14: ClassLevel!
    _15: ClassLevel!
    _16: ClassLevel!
    _17: ClassLevel!
    _18: ClassLevel!
    _19: ClassLevel!
    _20: ClassLevel!
  }

  input LevelInput {
    _1: ClassLevelInput!
    _2: ClassLevelInput!
    _3: ClassLevelInput!
    _4: ClassLevelInput!
    _5: ClassLevelInput!
    _6: ClassLevelInput!
    _7: ClassLevelInput!
    _8: ClassLevelInput!
    _9: ClassLevelInput!
    _10: ClassLevelInput!
    _11: ClassLevelInput!
    _12: ClassLevelInput!
    _13: ClassLevelInput!
    _14: ClassLevelInput!
    _15: ClassLevelInput!
    _16: ClassLevelInput!
    _17: ClassLevelInput!
    _18: ClassLevelInput!
    _19: ClassLevelInput!
    _20: ClassLevelInput!
  }

  type SpellCasting {
    _0: [String]
    _1: [String]
    _2: [String]
    _3: [String]
    _4: [String]
    _5: [String]
    _6: [String]
    _7: [String]
    _8: [String]
    _9: [String]
  }

  input SpellCastingInput {
    _0: [String]
    _1: [String]
    _2: [String]
    _3: [String]
    _4: [String]
    _5: [String]
    _6: [String]
    _7: [String]
    _8: [String]
    _9: [String]
  }

  type StartingEquipment {
    class: String
  }

  input StartingEquipmentInput {
    class: String
  }

  type Class {
    id: ID!
    name: String!
    hitDie: Int!
    armor: [NameList!]!
    proficiencyChoices: [OptionsString!]!
    savingThrows: [NameList!]!
    subClasses: [NameDescList]
    startingEquipment: StartingEquipment!
    levels: Level!
    spellcasting: SpellCasting
    weapons: [NameList!]!
  }

  input ClassInput {
    name: String!
    hitDie: Int!
    armor: [NameListInput!]!
    proficiencyChoices: [OptionsStringInput!]!
    savingThrows: [NameListInput!]!
    subClasses: [NameDescListInput]
    startingEquipment: StartingEquipmentInput!
    levels: LevelInput!
    spellcasting: SpellCastingInput
    weapons: [NameListInput!]!
  }

  type Query {
    getClasses: [Class!]!
    getClassesByName(name: String!): Class!
  }

  type Mutation {
    addClass(class: ClassInput!): Class
    removeClass(id: ID!): ID!
  }
`