import * as abilityActions from './ability';
import * as armorActions from './armor';
import * as classActions from './class';
import * as descActions from './desc';
import * as langActions from './lang';
import * as raceActions from './race';
import * as savingThrowsActions from './savingThrows';
import * as skillsActions from './skills';
import * as statsActions from './stats';
import * as weaponsActions from './weapons';

// const actionsList = {
//   ...abilityActions,
//   ...armorActions,
//   ...classActions,
//   ...descActions,
//   ...langActions,
//   ...raceActions,
//   ...savingThrowsActions,
//   ...skillsActions,
//   ...statsActions,
//   ...weaponsActions
// }

// export default actionsList;

export {
  ...abilityActions,
  ...armorActions,
  ...classActions,
  ...descActions,
  ...langActions,
  ...raceActions,
  ...savingThrowsActions,
  ...skillsActions,
  ...statsActions,
  ...weaponsActions
};


