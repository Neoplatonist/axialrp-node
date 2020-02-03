module.exports = `
  type Cost {
    quantity: Int
    unit: String
  }

  input CostInput {
    quantity: Int
    unit: String
  }

  type NameList {
    name: String
  }

  input NameListInput {
    name: String
  }

  type NameDescList {
    name: String
    description: String
  }

  input NameDescListInput {
    name: String
    description: String
  }

  type OptionsString {
    choose: Int
    type: String
    from: [NameList]
  }

  input OptionsStringInput {
    choose: Int
    type: String
    from: [NameListInput]
  }
`