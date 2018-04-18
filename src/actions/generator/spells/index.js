import {
  SET_SPELLS_ALL,
  SET_SPELLS_LIST,
  SET_SPELLS_SELECTED
} from '../../types';

import { spellQuery } from '../../../db';

/*
 *  Actions
 */
export const setSpellsList = list => {
  return { type: SET_SPELLS_LIST, payload: list };
};

export const setSpellsAll = () => {
  return async dispatch => {
    try {
      const spells = await spellQuery();
      dispatch({ type: SET_SPELLS_ALL, payload: spells });
    } catch (err) {
      console.log('setSpellsAll spellQuery', err)
    }
  }
};

export const setSpellsSelected = list => {
  return { type: SET_SPELLS_SELECTED, payload: list };
};