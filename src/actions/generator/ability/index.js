import { 
  SET_ABILITY, 
  SET_ABILITY_MOD, 
  SET_ABILITY_POINTS, 
  SET_ABILITY_TYPE
} from '../../types';

/*
 *  Actions
 */
export const setAbility = (index, ability) => {
  // if (isNaN(ability)) ability = 0;
  return (dispatch, getState) => {
    const state = [...getState().generator.ability];
    state[index] = ability || 0;
    return dispatch({ type: SET_ABILITY, payload: state });
  };
};

export const setAbilityPoints = points => {
  if (isNaN(points)) points = 0;
  return { type: SET_ABILITY_POINTS, payload: points };
};

export const setAbilityBulk = ability => {
  // if (isNaN(ability)) ability = 0;
  return { type: SET_ABILITY, payload: ability };
};

export const setAbilityMod = mod => {
  return { type: SET_ABILITY_MOD, payload: mod };
};

export const setAbilitySwitch = (index, direction) => {
  return (dispatch, getState) => {
    let ability = [...getState().generator.ability];

    if (direction === 'up') {
      if (index === 0) {
        ability.push(...ability.splice(index, 1));
      } else {
        ability[index-1] = ability.splice(index, 1, ability[index-1])[0];
      }
    }

    if (direction === 'down') {
      if (index === ability.length-1) {
        ability.unshift(ability.pop());
      } else {
        ability[index+1] = ability.splice(index, 1, ability[index+1])[0];
      }
    }

    dispatch({ type: SET_ABILITY, payload: ability });
  }; 
};

export const setAbilityType = type => {
  return { type: SET_ABILITY_TYPE, payload: type };
};