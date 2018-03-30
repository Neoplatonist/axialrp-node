import {
  SET_ALIGNMENT, 
  SET_CHARACTER,
  SET_LANGUAGE, 
  SET_LANGUAGE_LIST,
  SET_RACE,
  SET_RACE_OBJ,
  SET_SUBRACE,
  SET_SUBRACE_OBJ
} from '../../types';
import { raceQuery, raceNameQuery } from '../../../db/race';
// import { raceDB } from '../../../pages/db.js';

/*
 *  Actions
 */
export const setRace = race => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_RACE, payload: race });

    try {
      const r = await raceNameQuery(race);

      dispatch({ type: SET_RACE_OBJ, payload: r });
      dispatch({ type: SET_ALIGNMENT, payload: r.alignment.main });
      dispatch({ type: SET_LANGUAGE, payload: '' })
      dispatch({ 
        type: SET_LANGUAGE_LIST,
        payload: r.languages.type.map(v => v.name) 
      });
  
      const char = getState().generator.character;
      dispatch({ 
        type: SET_CHARACTER, 
        payload: {...char, age: r.age.adult, height: JSON.stringify(r.size.height.min) + 'ft'} 
      });
    } catch (err) {
      console.log(err);
    };
  };
};

export const setRaceObj = race => {
  return { type: SET_RACE_OBJ, payload: race };
};

export const setSubRace = subrace => {
  return { type: SET_SUBRACE, payload: subrace };
};

export const setSubRaceObj = subraceObj => {
  return { type: SET_SUBRACE_OBJ, payload: subraceObj };
};