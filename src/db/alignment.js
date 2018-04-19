import { client } from './index';

const alignmentType = `
  name
  description
`;

export const alignmentNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getAlignmentNameNow($alignment: String) {
        getAlignmentName(name: $alignment) {
          ${alignmentType}
        }
      }
    `, { alignment: name }).then(result => result.getAlignmentName);
  } catch (err) {
    console.log("failed alignmentNameQuery", err)
    result = Promise.reject(err);
  }

  return result;
};


export const alignmentQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getAlignments {
          ${alignmentType}
        }
      }
    `).then(result => result.getAlignments);
  } catch (err) {
    console.log("failed alignmentQuery", err)
    result = Promise.reject(err);
  }

  return result;
};