import { 
  SET_CLASS, 
  SET_CLASS_NAME_LIST_ERROR,
  SET_CLASS_NAME_LIST_LOADING,
  SET_CLASS_NAME_LIST_SUCCESS,
  SET_CLASS_OBJ_ERROR,
  SET_CLASS_OBJ_LOADING,
  SET_CLASS_OBJ_SUCCESS, 
  SET_HP_ERROR,
  SET_HP_LOADING,
  SET_HP_SUCCESS 
  // SET_SPELLS_LIST 
} from '../../types';

import { 
  classAllNamesQuery,
  classNameQuery
} from '../../../db';

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

    load.data = 0;
    dispatch({ type: SET_HP_LOADING, payload: load });

    try {
      load.data = await classNameQuery(char_class);
      load.status = 'success';
      dispatch({ type: SET_CLASS_OBJ_SUCCESS, payload: load });

      try {
        load.data = load.data.hit_die;
        load.status = 'success';
        dispatch({ type: SET_HP_SUCCESS, payload: load });
      } catch (err) {
        load.status = 'error';
        load.data = 0;
        dispatch({ type: SET_HP_ERROR, payload: load });
      }
    } catch (err) {
      load.status = 'error';
      load.data = {};
      dispatch({ type: SET_CLASS_OBJ_ERROR, payload: load });

      load.data = 0;
      dispatch({ type: SET_HP_ERROR, payload: load });
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
