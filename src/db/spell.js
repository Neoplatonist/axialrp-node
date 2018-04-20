import { client } from './index';

const spellType = `
  name
  description
  higher_level
  range
  components
  material
  ritual
  duration
  concentration
  casting_time
  level
  school
  classes {
    name
  }
  subclasses {
    name
  }
`;

export const spellByClassQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getSpellByClassNow($name: String) {
        getSpellByClass(name: $name) {
          ${spellType}
        }
      }
    `, { name: name }).then(result => result.getSpellByClass);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};

export const spellNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getSpellNameNow($alignment: String) {
        getSpellName(name: $alignment) {
          ${spellType}
        }
      }
    `, { spell: name }).then(result => result.getSpellName);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const spellQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getSpells {
          ${spellType}
        }
      }
    `).then(result => result.getSpells);
  } catch(err) {
    result = Promise.reject(err);
  }

  return result;
};