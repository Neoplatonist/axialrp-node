module.exports = {
  Query: {
    getTools: (_, __, { db }) => db.Tool.getTools(),
    getToolByName: (_, { name }, { db }) => db.Tool.getToolByName(name)
  },

  Mutation: {
    addTool: (_, args, { db }) => db.Tool.addTool(args),
    removeTool: (_, args, { db }) => db.Tool.removeTool(args)
  }
}