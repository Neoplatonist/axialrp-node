import {SET_CHARACTER} from '../../types';

export const setCharacter = character => {
  const char = { 
    ...character, 
    age: character.age || 0, 
    xp: character.xp || 0 
  };

  return { type: SET_CHARACTER, payload: char };
};