import { client } from './index';

const raceType = `
  name
  description
  abilityBonus
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
  subRaces {
    name
  }
  savingThrows {
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

export const raceNameQuery = async(name) => {
  let result;

  try {
    result = await client.query(`
      query getRaceNameNow($race: String!) {
        getRaceByName(name: $race) {
          ${raceType}
        }
      }
    `, { race: name }).then(result => result.getRaceByName)
  } catch (err) {
    console.log(err)
    result = Promise.reject(err);
  }

  return result;
};

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
    result = Promise.reject(err);
  }

  return result;
};