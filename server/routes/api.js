// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');
// const router = express.Router()
// const { MainApi } = require('./db')

// router.get('/v1/person', async function(req, res, next) {
//   const db = new MainApi()
//   const { text } = await db.getMain()
//   res.json({ text, message: 'This came from the api' })
// });

// router.get('/v1/person/:personId', async function(req, res, next) {
//   const db = new MainApi()
//   const { text } = await db.getPersonId(req.params.personId)
//   res.json({ text, message: 'This came from the api' })
// });

// module.exports = router

