import { client } from './index';

const weaponType = `
  name
  category
  range
  cost {
    quantity
    unit
  }
  damage {
    dice_count
    dice_value
    type
  }
  atk_range {
    normal
    long
  }
  weight
  properties {
    name
  }
  throw_atk_range {
    normal
    long
  }
`;

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
    console.log("failed getWeaponByCategory", err)
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
    console.log("failed weaponNameQuery", err)
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
    console.log("failed weaponQuery", err)
  }

  return result;
};

// export const weaponQuery = () => 
//   client.query(`
//     {
//       getWeapons {
//         ${weaponType}
//       }
//     }
//   `)
//   .then(result => result.getWeapons)
//   .catch(err => console.log(err));