import {
  SET_ALIGNMENT, 
  SET_CHARACTER,
  SET_LANGUAGE, 
  SET_LANGUAGE_LIST,
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

/*
 *  Actions
 */

// let r;
// try {
//   r = await raceNameQuery(e.target.value);

//   if (isEmpty(r.sub_races)) {
//     this.props.setSubRace('')
//   } else {
//     this.props.setSubRace(r.sub_races[0].name);

//     let subrace;
//     try {
//       subrace = await sub_raceNameQuery(r.sub_races[0].name);
//       this.props.setSubRaceObj(subrace);
//     } catch (err) {
//       console.warn(err)
//       this.props.setSubRaceObj({});
//     }
//   }
// } catch (err) {
//   console.warn(err)
// } 

// FIXME: Update subrace error handling
export const setRace = race => {
  return async (dispatch, getState) => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_RACE, payload: race });
    dispatch({ type: SET_RACE_OBJ_LOADING, payload: load });

    try {
      load.data = await raceNameQuery(race);
      load.status = 'success';

      dispatch({ type: SET_RACE_OBJ_SUCCESS, payload: load });

      dispatch(setSubRace(load.data.sub_races[0].name));

      dispatch({ type: SET_ALIGNMENT, payload: load.data.alignment.main });
      dispatch({ type: SET_LANGUAGE, payload: '' })
      dispatch({ 
        type: SET_LANGUAGE_LIST,
        payload: load.data.languages.type.map(v => v.name) 
      });
  
      const char = getState().generator.character;
      dispatch({ 
        type: SET_CHARACTER, 
        payload: {
          ...char, 
          age: load.data.age.adult, 
          height: JSON.stringify(load.data.size.height.min) + 'ft'
        } 
      });
    } catch (err) {
      console.log(err.message);
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_RACE_OBJ_ERROR, payload: load });
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
      load.data = await raceNameListQuery();
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
      load.data = await sub_raceNameQuery(name);
      load.status = 'success';
      dispatch({ type: SET_SUBRACE_OBJ_SUCCESS, payload: load });
    } catch (err) {
      load.data = {};
      load.status = 'error';
      dispatch({ type: SET_SUBRACE_OBJ_ERROR, payload: load });
    }
  };
};