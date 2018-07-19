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
  SET_LEVEL,
  SET_LEVEL_FEATURES_ERROR,
  SET_LEVEL_FEATURES_LOADING,
  SET_LEVEL_FEATURES_SUCCESS,
  SET_LEVEL_FEATURES_SELECTED
} from '../../types';

import { alignmentQuery, classFeatureNameQuery } from '../../../db';
import { setSpellsSelected } from '../../index';
import { cache } from '../../../utils';

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
      load.data = await cache('alignmentList', alignmentQuery);
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
  return dispatch => {
    level = level || 1

    dispatch({ type: SET_LEVEL, payload: level});
    dispatch(setLevelFeatures(level));
    dispatch(setSpellsSelected());
  };
};

export const setLevelFeatures = level => {
  return async (dispatch, getState) => {
    level = level || getState().generator.level;
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_LEVEL_FEATURES_LOADING, payload: load });

    try {
      const levels = getState().generator.classObj.data.levels;
      const features = [].concat(...Object.keys(levels)
        .filter(i => i <= level)
        .reduce((prev, cur) => [...prev, levels[cur].features], []));

      load.data = await Promise.all(features.map(v => classFeatureNameQuery(v)));
      load.status = 'success';

      dispatch({ type: SET_LEVEL_FEATURES_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';

      dispatch({ type: SET_LEVEL_FEATURES_ERROR, payload: load });
    }
  };
};

export const setLevelFeaturesSelected = features => {
  return { type: SET_LEVEL_FEATURES_SELECTED, payload: features };
};