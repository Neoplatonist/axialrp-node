const { GraphQLList, GraphQLString } = require('graphql');
const { ClassFeatureType } = require('../type/classFeature');
const { MyDB } = require('../../db');

// Fake DB initializing
const db = new MyDB();

// Alignment Query
const getClassFeatures = {
  type: new GraphQLList(ClassFeatureType),
  description: 'GETS all Class Features',

  resolve() {
    return new Promise(res => setTimeout(() => {
      res(db.getClassFeatures());
    }, 200));
  }
};

const getClassFeatureName = {
  type: ClassFeatureType,
  args: { name: { type: GraphQLString } },
  description: 'GETS a single Class Feature by Name',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getClassFeatureName(args.name));
    }, 200));
  }
};

const getClassFeatureClass = {
  type: new GraphQLList(ClassFeatureType),
  args: { name: { type: GraphQLString } },
  description: 'GETS all Class Features by Class',

  resolve(val, args) {
    return new Promise(res => setTimeout(() => {
      res(db.getClassFeatureClass(args.name));
    }, 200));
  }
};

module.exports = {
  getClassFeatures,
  getClassFeatureName,
  getClassFeatureClass
};