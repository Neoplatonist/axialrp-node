import { 
  SET_ARMOR, 
  SET_ARMOR_ACTIVE,
  SET_ARMOR_ALL
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
    try {
      const armor = await armorQuery();
      dispatch({ type: SET_ARMOR_ALL, payload: armor });
    } catch (err) {
      console.log('setArmorAll armorQuery', err)
    }
  };
};