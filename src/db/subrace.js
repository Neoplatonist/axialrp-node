import { client } from './index';

const subraceType = `
  name
  description
  abilityBonus
  hitPoints
`;

export const subRaceNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getSubRaceNameNow($subrace: String!) {
        getSubraceByName(name: $subrace) {
          ${subraceType}
        }
      }
    `, { subrace: name }).then(result => result.getSubraceByName)
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const subRaceQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getSubRaces {
          ${subraceType}
        }
      }
    `).then(result => result.getSubRaces);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};