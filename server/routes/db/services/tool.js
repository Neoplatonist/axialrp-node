const { Tool } = require('../models')

module.exports = {
  getTools: () => {
    return Tool.find({})
  },

  getToolByName: (name) => {
    return Tool.findOne({ name })
  },

  addTool: (obj) => {
    return Tool({...obj.tool}).save()
  },

  removeTool: ({ id }) => {
    return Tool.findByIdAndRemove(id).then(tool => {
      return tool.id
    })
  }
}