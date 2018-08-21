module.exports = `
  type Tool {
    id: ID!
    name: String!
    category: String!
    cost: Cost!
    weight: Int!
    description: [String!]!
  }

  input ToolInput {
    name: String!
    category: String!
    cost: CostInput!
    weight: Int!
    description: [String!]!
  }

  type Query {
    getTools: [Tool!]!
    getToolByName(name: String!): Tool!
  }

  type Mutation {
    addTool(tool: ToolInput!): Tool!
    removeTool(id: ID!): ID!
  }
`