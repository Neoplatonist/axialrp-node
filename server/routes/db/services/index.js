const mongoose = require('mongoose')

const AlignmentService = require('./alignment')
const ArmorService = require('./armor')

const { 
  alignmentDB,
  armorDB
} = require('../data')

class DatabaseService {
  constructor() {
    this.connected = false
    this.fillDB = false
    this.db = this.connect()
  }

  async connect() {
    if (mongoose.connection.readyState !== 0) {
      return mongoose
    }

    let db
    try {
      db = await mongoose.connect(
        "mongodb://192.168.9.23:27017/axialrp",
        {
          promiseLibrary: global.Promise,
          useNewUrlParser: true
        }
      )

      db.connection.once('open', () => {
        this.connected = true
        console.warn("db is connected")
      })

      if (this.fillDB) fillDB(db)
    } catch(err) {
      db = undefined
      throw Error(err)
    }

    return db
  }

  get Alignment() {
    return AlignmentService
  }

  get Armor() {
    return ArmorService
  }
}

function fillDB(db) {
  db.model('alignment').insertMany(alignmentDB, (err, docs) => {
    console.log("inserted alignmentDB")
  })

  db.model('armor').insertMany(armorDB, (err, docs) => {
    console.log("inserted armorDB")
  })
}

module.exports = new DatabaseService()