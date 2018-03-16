import {SET_ARMOR, SET_ARMOR_ACTIVE} from '../../types';

export const setArmor = armor => {
  return { type: SET_ARMOR, payload: armor };
};

export const setArmorActive = active => {
  return { type: SET_ARMOR_ACTIVE, payload: active };
};