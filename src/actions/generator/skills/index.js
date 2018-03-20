import { SET_SKILLS } from '../../types';

/*
 *  Actions
 */
export const setSkills = skills => {
  return { type: SET_SKILLS, payload: skills };
};