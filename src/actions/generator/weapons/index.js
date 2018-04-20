import { 
  SET_WEAPON, 
  SET_WEAPON_ACTIVE,
  SET_WEAPON_ALL_ERROR,
  SET_WEAPON_ALL_LOADING,
  SET_WEAPON_ALL_SUCCESS
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
    const item = getState().generator.weaponAll.data.find(v => v.name === weapon.target.value);
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
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_WEAPON_ALL_LOADING, payload: load })

    try {
      load.data = await weaponQuery();
      load.status = 'success';
      dispatch({ type: SET_WEAPON_ALL_SUCCESS, payload: load });
    } catch (err) {
      load.data = await weaponQuery();
      load.status = 'error';
      dispatch({ type: SET_WEAPON_ALL_ERROR, payload: load });
    }
  };
};