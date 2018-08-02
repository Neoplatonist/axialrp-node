module.exports = {
  Level: {
    _1: parent => parent[1],
    _2: parent => parent[2],
    _3: parent => parent[3],
    _4: parent => parent[4],
    _5: parent => parent[5],
    _6: parent => parent[6],
    _7: parent => parent[7],
    _8: parent => parent[8],
    _9: parent => parent[9],
    _10: parent => parent[10],
    _11: parent => parent[11],
    _12: parent => parent[12],
    _13: parent => parent[13],
    _14: parent => parent[14],
    _15: parent => parent[15],
    _16: parent => parent[16],
    _17: parent => parent[17],
    _18: parent => parent[18],
    _19: parent => parent[19],
    _20: parent => parent[20],
  },

  SpellCasting: {
    _0: parent => parent[0],
    _1: parent => parent[1],
    _2: parent => parent[2],
    _3: parent => parent[3],
    _4: parent => parent[4],
    _5: parent => parent[5],
    _6: parent => parent[6],
    _7: parent => parent[7],
    _8: parent => parent[8],
    _9: parent => parent[9],
  },

  Query: {
    getClasses: (_, __, { db }) => db.Class.getClasses(),
    getClassesByName: (_, { name }, { db }) => db.Class.getClassesByName(name)
  },

  Mutation: {
    addClass: (_, args, { db }) => {
      return db.Class.addClass(args)
    },
    removeClass: (_, args, { db }) => db.Class.removeClass(args)
  }
}