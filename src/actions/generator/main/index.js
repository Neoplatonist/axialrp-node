import { 
  SET_ABILITY,
  SET_ALIGNMENT, 
  SET_ALIGNMENT_ALL,
  SET_DICE,
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
    try {
      const alignments = await alignmentQuery();
      dispatch({ type: SET_ALIGNMENT_ALL, payload: alignments });
    } catch (err) {
      console.log('setAlignmentAll alignmentQuery', err)
    }
  };
};

export const setDice = dice => {
  return (dispatch, getState) => {
    dispatch({ type: SET_DICE, payload: dice });
    dispatch({ type: SET_ABILITY, payload: [...dice] });
  };
};

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setLanguageList = lang => {
  return { type: SET_LANGUAGE_LIST, payload: lang };
};

export const setLevel = level => {
  return { type: SET_LEVEL, payload: level || 1 }
};