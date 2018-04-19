import { client } from './index';

const armorType = `
  name
  category
  armor_class {
    base
    dex_bonus
    max_bonus
  }
  str_minimum
  stealth_disadvantage
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
    console.log("failed getArmorByCategory", err)
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
    console.log("failed armorNameQuery", err)
    result = Promise.reject(err);
  }

  return result;
};


export const armorQuery = async () => {
  let result = [];

  try {
    result = await client.query(`
      {
        getArmors {
          ${armorType}
        }
      }
    `).then(result => result.getArmors);
  } catch (err) {
    console.log("failed armorQuery", err)
    result = Promise.reject(err);
  }

  return result;
};

// export const armorQuery = () => 
//   client.query(`
//     {
//       getArmors {
//         ${armorType}
//       }
//     }
//   `)
//   .then(result => result.getArmors)
//   .catch(err => console.log(err));