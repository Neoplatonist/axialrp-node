const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');
const { 
  NameListType, 
  OptionsIntType, 
  OptionsStringType 
} = require('./index');



const RaceType = new GraphQLObjectType({
  name: 'Race',

  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    ability_bonus: { type: new GraphQLList(GraphQLInt) },
    age: { type: new GraphQLObjectType({
      name: 'Age',

      fields: () => ({
        adult: { type: GraphQLInt },
        description: { type: GraphQLString },
        max: { type: GraphQLInt }
      })
    })},

    alignment: { type: new GraphQLObjectType({
      name: 'Alignment',

      fields: () => ({
        description: { type: GraphQLString },
        main: { type: GraphQLString }
      })
    })},

    size: { type: new GraphQLObjectType({
      name: 'Size',

      fields: () => ({
        description: { type: GraphQLString },
        height: { type: new GraphQLObjectType({
          name: 'Height',
    
          fields: () => ({
            min: { type: GraphQLInt },
            max: { type: GraphQLInt }
          })
        })}
      })
    })},

    speed: { type: new GraphQLObjectType({
      name: 'Speed',

      fields: () => ({
        base: { type: GraphQLInt },
        description: { type: GraphQLString }
      })
    })},

    languages: { type: new GraphQLObjectType({
      name: 'Languages',

      fields: () => ({
        description: { type: GraphQLString },
        options: { type: OptionsIntType },
        type: { type: new GraphQLList(NameListType) }
      })
    })},

    traits: { type: new GraphQLObjectType({
      name: 'Traits',

      fields: () => ({
        options: { type: OptionsIntType },
        type: { type: new GraphQLList(NameListType) }
      })
    })},

    sub_races: { type: new GraphQLList(NameListType) },

    saving_throws: { type: new GraphQLObjectType({
      name: 'SavingThrows',

      fields: () => ({
        against: { type: GraphQLString },
        description: { type: GraphQLString }
      })
    })},

    tools: { type: OptionsStringType },
    weapons: { type: new GraphQLList(GraphQLString) }
  })
});



module.exports = {
  RaceType
};