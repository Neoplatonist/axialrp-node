import { 
  SET_WEAPON, 
  SET_WEAPON_ACTIVE,
  SET_WEAPON_ALL
} from '../../types';

import {
  weaponQuery
} from '../../../db';

/*
 *  Actions
 */
export const addWeapon = weapon => {
  return (dispatch, getState) => {
    const list = [...getState().generator.weapon].filter(v => v.name !== weapon.target.value);
    const item = getState().generator.weaponAll.find(v => v.name === weapon.target.value);
    dispatch({ type: SET_WEAPON, payload: [...list, item] });
  };
};

export const removeWeapon = name => {
  return (dispatch, getState) => {
    const list = getState().generator.weapon.filter(v => v.name !== name);
    dispatch({ type: SET_WEAPON, payload: list });
  }
};

export const setWeaponActive = active => {
  return { type: SET_WEAPON_ACTIVE, payload: active };
};

export const setWeaponAll = () => {
  return async dispatch => {
    // let load = {
    //   loading: true,
    //   expire: 12,
    //   data: []
    // };

    // dispatch({ type: SET_WEAPON_ALL_LOADING, payload: load })

    try {
      const weapon = await weaponQuery();
      // load = {...load, loading: false, data: weapon}
      // console.log(load)
      dispatch({ type: SET_WEAPON_ALL, payload: weapon });
    } catch (err) {
      console.log('setWeaponAll weaponQuery', err)
    }
  };
};