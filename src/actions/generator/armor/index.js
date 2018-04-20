import { 
  SET_ARMOR, 
  SET_ARMOR_ACTIVE,
  SET_ARMOR_ALL_ERROR,
  SET_ARMOR_ALL_LOADING,
  SET_ARMOR_ALL_SUCCESS
} from '../../types';

import {
  armorQuery
} from '../../../db';

/*
 *  Actions
 */
export const addArmor = armor => {
  return (dispatch, getState) => {
    const list = [...getState().generator.armor].filter(v => v.name !== armor.target.value);
    const item = getState().generator.armorAll.find(v => v.name === armor.target.value);
    dispatch({ type: SET_ARMOR, payload: [...list, item] });
  };
};

export const removeArmor = name => {
  return (dispatch, getState) => {
    const list = getState().generator.armor.filter(v => v.name !== name);
    dispatch({ type: SET_ARMOR, payload: list });
  }
};

export const setArmorActive = active => {
  return { type: SET_ARMOR_ACTIVE, payload: active };
};

export const setArmorAll = () => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_ARMOR_ALL_LOADING, payload: load });

    try {
      load.data = await armorQuery();
      load.status = 'success';
      dispatch({ type: SET_ARMOR_ALL_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_ARMOR_ALL_ERROR, payload: load });
    }
  };
};