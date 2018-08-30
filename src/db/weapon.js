import { client } from './index';

const weaponType = `
  name
  category
  range {
    name
    rangeType {
      type
      normal
      long
    }
  }
  cost {
    quantity
    unit
  }
  damage {
    name
    diceCount
    diceValue
    type
  }
  weight
  properties {
    name
  }
`

export const weaponByCategoryQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getWeaponByCategoryNow($weapon: String) {
        getWeaponByCategory(category: $weapon) {
          ${weaponType}
        }
      }
    `, { weapon: name }).then(result => result.getWeaponByCategory);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};

export const weaponNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getWeaponNameNow($weapon: String) {
        getWeaponName(name: $weapon) {
          ${weaponType}
        }
      }
    `, { weapon: name }).then(result => result.getWeaponName);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const weaponQuery = async () => {
  let result = [];

  try {
    result = await client.query(`
      {
        getWeapons {
          ${weaponType}
        }
      }
    `).then(result => result.getWeapons);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};