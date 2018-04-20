import { 
  SET_CLASS, 
  SET_CLASS_NAME_LIST_ERROR,
  SET_CLASS_NAME_LIST_LOADING,
  SET_CLASS_NAME_LIST_SUCCESS,
  SET_CLASS_OBJ_ERROR,
  SET_CLASS_OBJ_LOADING,
  SET_CLASS_OBJ_SUCCESS
} from '../../types';

import { 
  classAllNamesQuery,
  classNameQuery
} from '../../../db';

import { setHP } from '../../index';

/*
 *  Actions
 */
export const setClass = char_class => {
  return async dispatch => {
    let load = {
      status: 'none',
      data: {}
    };

    dispatch({ type: SET_CLASS, payload: char_class });

    load.status = 'loading';
    load.data = {};
    dispatch({ type: SET_CLASS_OBJ_LOADING, payload: load });

    try {
      load.data = await classNameQuery(char_class);
      load.status = 'success';
      dispatch({ type: SET_CLASS_OBJ_SUCCESS, payload: load });

      dispatch(setHP(load.data.hit_die));
    } catch (err) {
      load.status = 'error';
      load.data = {};
      dispatch({ type: SET_CLASS_OBJ_ERROR, payload: load });

      dispatch(setHP(0));
    }
  };
};

export const setClassNameList = () => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_CLASS_NAME_LIST_LOADING, payload: load });

    try {
      load.data = await classAllNamesQuery();
      load.status = 'success';
      dispatch({ type: SET_CLASS_NAME_LIST_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_CLASS_NAME_LIST_ERROR, payload: load });
    }
  };
};
