const { ApolloServer } = require('apollo-server-express')
const { join } = require('path')
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const db = require('./services')

const typeDefs = mergeTypes(fileLoader(join(__dirname, './graphql/types')))
const resolvers = mergeResolvers(
  fileLoader(join(__dirname, './graphql/resolvers')))

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  }
})