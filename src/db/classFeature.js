import { client } from './index';

const classFeatureType = `
  name
  classes
  description
`;

export const classFeatureNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getClassFeatureNameNow($featureName: String) {
        getClassFeatureName(name: $featureName) {
          ${classFeatureType}
        }
      }
    `, { featureName: name })
      .then(result => result.getClassFeatureName);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};

export const classFeatureAllQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getClasses {
          ${classFeatureType}
        }
      }
    `).then(result => result.getClassFeatures);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const classFeatureClassQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query classFeatureClassNow($className: String) {
        classFeatureClass(name: $className) {
          ${classFeatureType}
        }
      }
    `, { className: name })
      .then(result => result.classFeatureClass);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};