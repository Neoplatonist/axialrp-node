import {
  SET_RACE,
  SET_RACE_OBJ_ERROR,
  SET_RACE_OBJ_LOADING,
  SET_RACE_OBJ_SUCCESS,
  SET_RACE_NAME_LIST_ERROR,
  SET_RACE_NAME_LIST_LOADING,
  SET_RACE_NAME_LIST_SUCCESS,
  SET_SUBRACE,
  SET_SUBRACE_OBJ_ERROR,
  SET_SUBRACE_OBJ_LOADING,
  SET_SUBRACE_OBJ_SUCCESS
} from '../../types';

import { 
  raceNameQuery, 
  raceNameListQuery, 
  sub_raceNameQuery 
} from '../../../db';

import { 
  setAlignment, 
  setCharacter, 
  setLanguage, 
  setLanguageList 
} from '../../index';

import { cache } from '../../../utils';

/*
 *  Actions
 */
export const setRace = race => {
  return async (dispatch, getState) => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_RACE, payload: race });
    dispatch({ type: SET_RACE_OBJ_LOADING, payload: load });

    try {
      load.data = await cache('raceList', raceNameQuery, race);
      load.status = 'success';

      dispatch({ type: SET_RACE_OBJ_SUCCESS, payload: load });

      let subrace = '';
      if (load.data.sub_races !== null && load.data.sub_races.length)
        subrace = load.data.sub_races[0].name;

      dispatch(setSubRace(subrace));
      dispatch(setAlignment(load.data.alignment.main));

      dispatch(setLanguage(''))
      dispatch(setLanguageList(load.data.languages.type.map(v => v.name)));
  
      const char = {
        ...getState().generator.character,
        age: load.data.age.adult, 
        height: JSON.stringify(load.data.size.height.min) + 'ft'
      };
      dispatch(setCharacter(char));
    } catch (err) {
      console.log(err.message);
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_RACE_OBJ_ERROR, payload: load });

      const char = {
        ...getState().generator.character,
        age: 0, 
        height: '0ft'
      };
      dispatch(setCharacter(char));
    };
  };
};

export const setRaceNameList = () => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_RACE_NAME_LIST_LOADING, payload: load });

    try {
      load.data = await cache('raceNameList', raceNameListQuery);
      load.status = 'success';
      dispatch({ type: SET_RACE_NAME_LIST_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_RACE_NAME_LIST_ERROR, payload: load });
    }
  };
};

export const setSubRace = name => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: {}
    };

    dispatch({ type: SET_SUBRACE, payload: name });
    dispatch({ type: SET_SUBRACE_OBJ_LOADING, payload: load });

    try {
      load.data = await cache('subraceList', sub_raceNameQuery, name);
      load.status = 'success';
      dispatch({ type: SET_SUBRACE_OBJ_SUCCESS, payload: load });
    } catch (err) {
      load.data = {};
      load.status = 'error';
      dispatch({ type: SET_SUBRACE_OBJ_ERROR, payload: load });
    }
  };
};