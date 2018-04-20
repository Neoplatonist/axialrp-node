import { client } from './index';

const raceType = `
  name
  description
  ability_bonus
  age {
    adult
    description
    max
  }
  alignment {
    description
    main
  }
  size {
    description
    height {
      min
      max
    }
  }
  speed {
    base
    description
  }
  languages {
    description
    options {
      choose
      type
      from {
        name
      }
    }
    type {
      name
    }
  }
  traits {
    options {
      choose
      type
      from {
        name
      }
    }
    type {
      name
      description
    }
  }
  sub_races {
    name
  }
  saving_throws {
    against
    description
  }
  tools {
    choose
    type
    from {
      name
    }
  }
  weapons
`;

export const raceNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getRaceNameNow($race: String) {
        getRaceName(name: $race) {
          ${raceType}
        }
      }
    `, { race: name }).then(result => result.getRaceName);
  } catch (err) {
    console.log("failed raceNameQuery", err)
    result = Promise.reject(err);
  }

  return result;
};

// export const raceNameQuery = name => {
//     return client.query(`
//       query getRaceNameNow($race: String) {
//         getRaceName(name: $race) {
//           ${raceType}
//         }
//       }
//     `, { race: name }).then(result => result.getRaceName);
// };
export const raceNameListQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getRaces {
          name
        }
      }
    `).then(result => result.getRaces);
  } catch (err) {
    console.log("failed raceQuery", err)
    result = Promise.reject(err);
  }

  return result;
};

export const raceQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getRaces {
          ${raceType}
        }
      }
    `).then(result => result.getRaces);
  } catch (err) {
    console.log("failed raceQuery", err)
    result = Promise.reject(err);
  }

  return result;
};

// export const raceQuery = () => {
//   return new Promise(async(resolve, reject) => {
//     const query = await client.query(`
//       {
//         getRaces {
//           ${raceType}
//         }
//       }
//     `).then(result => result.getRaces);

//     resolve(query)
//   });
// };