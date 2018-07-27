const model = require('schema')

const getAlignments = async() => {
  return await model.find((err, alignments) => {
    if (err) throw(err)
    return alignments
  })
}

const getAlignmentName = async(name) => {
  return await model.find({ name: name }, (err, alignment) => {
    if (err) throw(err)
    return alignment
  })
}

module.exports = {
  getAlignments: getAlignments,
  getAlignmentName: getAlignmentName
}