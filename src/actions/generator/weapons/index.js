import { SET_WEAPON, SET_WEAPON_ACTIVE } from '../../types';

/*
 *  Actions
 */
export const setWeapon = weapon => {
  return { type: SET_WEAPON, payload: weapon };
};

export const setWeaponActive = active => {
  return { type: SET_WEAPON_ACTIVE, payload: active };
};