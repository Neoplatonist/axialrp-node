import {SET_LANGUAGE, SET_LANGUAGE_LIST} from '../../types';

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setLanguageList = lang => {
  return { type: SET_LANGUAGE_LIST, payload: lang };
};