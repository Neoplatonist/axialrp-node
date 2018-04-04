import { SET_CLASS, SET_CLASS_OBJ, SET_HP } from '../../types';
// import { classDB } from '../../../pages/db.js';
import { classNameQuery } from '../../../db';

/*
 *  Actions
 */
export const setClass = char_class => {
  return async(dispatch, getState) => {
    dispatch({ type: SET_CLASS, payload: char_class });

    try {
      // const clas = classDB.find(v => v.name === char_class);
      const clas = await classNameQuery(char_class);
      dispatch({ type: SET_CLASS_OBJ, payload: clas });
      dispatch({ type: SET_HP, payload: clas.hit_die });
    } catch (err) {
      console.log('setClass failed', err)
    }
  };
};

export const setClassObj = clas => {
  return { type: SET_CLASS_OBJ, payload: clas };
};