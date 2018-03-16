import {SET_SAVING_THROWS} from '../../types';

export const setSavingThrows = saves => {
  return { type: SET_SAVING_THROWS, payload: saves };
};