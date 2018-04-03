import { client } from './index';

const sub_raceType = `
  name
  description
  ability_bonus
  hit_points
  traits {
    name
    description
  }
`;

export const sub_raceNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getSubRaceNameNow($subrace: String) {
        getSubRaceName(name: $subrace) {
          ${sub_raceType}
        }
      }
    `, { subrace: name }).then(result => result.getSubRaceName);
  } catch (err) {
    console.log("failed sub_raceNameQuery", err)
  }

  return result;
};


export const sub_raceQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getSubRaces {
          ${sub_raceType}
        }
      }
    `).then(result => result.getSubRaces);
  } catch (err) {
    console.log("failed sub_raceQuery", err)
  }

  return result;
};