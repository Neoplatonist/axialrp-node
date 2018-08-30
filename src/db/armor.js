import { client } from './index';

const armorType = `
  name
  category
  armorClass {
    base
    dexBonus
    maxBonus
  }
  strMinimum
  stealthDisadvantage
  weight
  cost {
    quantity
    unit
  }
`;

export const armorByCategoryQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getArmorByCategoryNow($armor: String) {
        getArmorByCategory(category: $armor) {
          ${armorType}
        }
      }
    `, { armor: name }).then(result => result.getArmorByCategory);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};

export const armorNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getArmorNameNow($armor: String) {
        getArmorName(name: $armor) {
          ${armorType}
        }
      }
    `, { armor: name }).then(result => result.getArmorName);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const armorQuery = async () => {
  let result = [];

  try {
    result = await client.query(`
      {
        getArmor {
          ${armorType}
        }
      }
    `).then(result => result.getArmor);
  } catch (err) {
    console.log(err)
    result = Promise.reject(err);
  }

  return result;
};