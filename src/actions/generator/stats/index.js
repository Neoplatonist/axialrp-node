import {
  SET_AC,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_PROFICIENCY_BONUS,
  SET_SPEED
} from '../../types';

/*
 *  Actions
 */
export const setAC = ac => {
  return { type: SET_AC, payload: ac || 0 };
};

export const setInitiative = init => {
  return { type: SET_INITIATIVE, payload: init || 0 };
};

export const setSpeed = speed => {
  return { type: SET_SPEED, payload: speed || 0 };
};

export const setInspiration = inspire => {
  return { type: SET_INSPIRATION, payload: inspire || 0 };
};

export const setProficiencyBonus = proficiency => {
  return { type: SET_PROFICIENCY_BONUS, payload: proficiency };
};