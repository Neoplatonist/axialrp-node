/* eslint-disable no-useless-escape */
// const { alignmentDB } = require('./alignmentDB')
// const { armorDB } = require('./armorDB')
// const { classDB } = require('./classDB')
// const { classFeatureDB } = require('./classFeatureDB')
// const { featDB } = require('./featDB')
// const { gearDB } = require('./gearDB')
// const { kitDB } = require('./kitDB')
// const { mountDB } = require('./mountDB')
// const { raceDB } = require('./raceDB')
// const { schoolOfMagicDB } = require('./schoolOfMagicDB')
// const { skillDB } = require('./skillDB')
// const { spellDB } = require('./spellDB')
// const { startingEquipmentDB } = require('./startingEquipmentDB')
// const { subraceDB } = require('./subraceDB')
// const { toolDB } = require('./toolDB')
// const { weaponDB } = require('./weaponDB')

const mongoose = require('mongoose')

module.exports = () => {
  // Connection URL `mongodb://address:port/dbName`
  const url = 'mongodb://192.168.9.23:27018/axialrp';

  // Database Name
  const dbName = 'axialrp';

  mongoose.connect(url, {
    promiseLibrary: global.Promise,
    useNewUrlParser: true
  })

  let conn = mongoose.connection

  conn.on('error', console.error.bind(console, 'connection error:'));
  conn.once('open', () => {
    console.log('we\'re connected')
  })
}


// module.exports = async() => {
//   // Connection URL
//   const url = 'mongodb://192.168.9.81:27017'

//   // Database Name
//   const dbName = 'axialrp'

//   // Use connect method to connect to the server
//   const {err, client} = await MongoClient.connect(url)
//   assert.equal(null, err)

//   const db = client.db(dbName)
//   console.log('Connected successfully to the db')

//   return db
// }


// module.exports = {
//   Alignment: alignmentDB,
//   Armor: armorDB,
//   Class: classDB,
//   ClassFeature: classFeatureDB,
//   Feat: featDB,
//   Gear: gearDB,
//   Kit: kitDB,
//   Mount: mountDB,
//   Race: raceDB,
//   SchoolOfMagic: schoolOfMagicDB,
//   Skill: skillDB,
//   Spell: spellDB,
//   StartingEquipment: startingEquipmentDB,
//   Subrace: subraceDB,
//   Tool: toolDB,
//   Weapon: weaponDB
// }