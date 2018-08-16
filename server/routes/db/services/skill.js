const { Skill } = require('../models')

module.exports = {
  getSkills: () => {
    return Skill.find({})
  },

  getSkillByName: (name) => {
    return Skill.findOne({ name })
  },

  addSkill: (obj) => {
    return Skill({...obj.skill}).save()
  },

  removeSkill: ({ id }) => {
    return Skill.findByIdAndRemove(id).then(skill => {
      return skill.id
    })
  }
}