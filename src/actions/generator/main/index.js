import { 
  SET_ALIGNMENT,
  SET_ABILITY,
  SET_ALIGNMENT_ALL_ERROR,
  SET_ALIGNMENT_ALL_LOADING,
  SET_ALIGNMENT_ALL_SUCCESS,
  SET_DICE,
  SET_HP,
  SET_LANGUAGE, 
  SET_LANGUAGE_LIST, 
  SET_LEVEL
} from '../../types';

import { alignmentQuery } from '../../../db';

/*
 *  Actions
 */
export const setAlignment = alignment => {
  return { type: SET_ALIGNMENT, payload: alignment };
};

export const setAlignmentAll = () => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_ALIGNMENT_ALL_LOADING, payload: load });

    try {
      load.data = await alignmentQuery();
      load.status = 'success';
      dispatch({ type: SET_ALIGNMENT_ALL_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_ALIGNMENT_ALL_ERROR, payload: load });
    }
  };
};

export const setDice = dice => {
  return dispatch => {
    dispatch({ type: SET_DICE, payload: dice });
    dispatch({ type: SET_ABILITY, payload: [...dice] });
  };
};

export const setHP = hp => {
  if(isNaN(hp) || hp === null || hp === undefined) hp = 0;
  return { type: SET_HP, payload: hp };
};

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setLanguageList = list => {
  return { type: SET_LANGUAGE_LIST, payload: list };
};

export const setLevel = level => {
  return { type: SET_LEVEL, payload: level || 1 };
};