const mongoose = require('mongoose')

const AlignmentService = require('./alignment')
const ArmorService = require('./armor')
const ClassService = require('./class')
const ClassFeatureService = require('./classFeature')
const FeatService = require('./feat')
const GearService = require('./gear')
const KitService = require('./kit')
const RaceService = require('./race')

const { 
  alignmentDB,
  armorDB,
  classDB,
  classFeatureDB,
  featDB,
  gearDB,
  kitDB,
  raceDB
} = require('../data')

class DatabaseService {
  constructor() {
    this.connected = false
    this.fillDB = true
    this.db = this.connect()
  }

  async connect() {
    if (mongoose.connection.readyState !== 0) {
      return mongoose
    }

    let db
    try {
      db = await mongoose.connect(
        "mongodb://192.168.9.23:27018/axialrp",
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

  get Class() {
    return ClassService
  }

  get ClassFeature() {
    return ClassFeatureService
  }

  get Feat() {
    return FeatService
  }

  get Gear() {
    return GearService
  }

  get Kit() {
    return KitService
  }

  get Race() {
    return RaceService
  }
}

function fillDB(db) {
  // db.model('alignment').insertMany(alignmentDB, (err, docs) => {
  //   console.log("inserted alignmentDB")
  // })

  // db.model('armor').insertMany(armorDB, (err, docs) => {
  //   console.log("inserted armorDB")
  // })

  // db.model('class').insertMany(classDB, (err, docs) => {
  //   console.log("inserted classDB")
  // })

  // db.model('classFeature').insertMany(classFeatureDB, (err, docs) => {
  //   console.log("inserted classFeatureDB")
  // })

  // db.model('feat').insertMany(featDB, (err, docs) => {
  //   console.log("inserted featDB")
  // })

  // db.model('gear').insertMany(gearDB, (err, docs) => {
  //   console.log("inserted gearDB")
  // })

  // db.model('kit').insertMany(kitDB, (err, docs) => {
  //   console.log("inserted kitDB")
  // })

  db.model('race').insertMany(raceDB, (err, docs) => {
    console.log("inserted raceDB")
  })
}

module.exports = new DatabaseService()