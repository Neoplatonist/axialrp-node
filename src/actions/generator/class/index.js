import { 
  SET_CLASS, 
  SET_CLASS_OBJ, 
  SET_HP, 
  SET_SPELLS_LIST 
} from '../../types';

import { 
  classNameQuery, 
  spellByClassQuery 
} from '../../../db';

/*
 *  Actions
 */
export const setClass = char_class => {
  return async(dispatch, getState) => {
    dispatch({ type: SET_CLASS, payload: char_class });

    try {
      const clas = await classNameQuery(char_class);
      dispatch({ type: SET_CLASS_OBJ, payload: clas });
      dispatch({ type: SET_HP, payload: clas.hit_die });

      try {
        const list = await spellByClassQuery(char_class);
        dispatch({ type: SET_SPELLS_LIST, payload: list });
      } catch (err) {
        console.log('setClass spellByClassQuery failed', err)
      }
    } catch (err) {
      console.log('setClass failed', err)
    }
  };
};

export const setClassObj = clas => {
  return { type: SET_CLASS_OBJ, payload: clas };
};