import { 
  SET_ABILITY,
  SET_ALIGNMENT, 
  SET_DICE,
  SET_LANGUAGE, 
  SET_LANGUAGE_LIST, 
  SET_LEVEL
} from '../../types';

/*
 *  Actions
 */
export const setAlignment = alignment => {
  return { type: SET_ALIGNMENT, payload: alignment };
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