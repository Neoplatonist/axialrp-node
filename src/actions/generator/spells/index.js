import {
  // SET_SPELLS_ALL,
  SET_SPELLS_ALL_ERROR,
  SET_SPELLS_ALL_LOADING,
  SET_SPELLS_ALL_SUCCESS,
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
    let load = {
      status: '',
      data: []
    };

    load.status = 'loading';
    dispatch({ type: SET_SPELLS_ALL_LOADING, payload: load });

    try {
      load.data = await spellQuery();
      load.status = 'success';
      dispatch({ type: SET_SPELLS_ALL_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'Could not load';
      dispatch({ type: SET_SPELLS_ALL_ERROR, payload: load });
    }
  }
};

export const setSpellsSelected = list => {
  return (dispatch, getState) => {
    if (list == undefined) {
      const level = getState().generator.level;
      const classLevels = getState().generator.classObj.data.levels[level];

      if (classLevels.spells_known != null) {
        list = {};
        for (var i = 0; i < classLevels.type.length; i++) {
          list[i] = [];
        } 
      }
    }

    dispatch({ type: SET_SPELLS_SELECTED, payload: list });
  };
};