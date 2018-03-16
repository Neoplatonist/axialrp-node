import {SET_CLASS, SET_CLASS_OBJ, SET_HP} from '../../types';
import {classDB} from '../../../pages/db.js';

export const setClass = char_class => {
  return (dispatch, getState) => {
    dispatch({ type: SET_CLASS, payload: char_class });

    const clas = classDB.find(v => v.name === char_class);
    dispatch({ type: SET_CLASS_OBJ, payload: clas });
    dispatch({ type: SET_HP, payload: clas.hit_die });
  };
};

export const setClassObj = clas => {
  return { type: SET_CLASS_OBJ, payload: clas };
};