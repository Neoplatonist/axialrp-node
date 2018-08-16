const mongoose = require('mongoose')
const { Schema } = mongoose

const NameList = new Schema({
  name: String
})

const NameDescList = new Schema({
  name: String,
  description: String
})


module.exports = {
  NameList,
  NameDescList,
}