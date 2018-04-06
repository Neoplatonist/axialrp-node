import {
  SET_SPELLS_LIST
} from '../../types';

/*
 *  Actions
 */
export const setSpellsList = list => {
  return { type: SET_SPELLS_LIST, payload: list };
};
