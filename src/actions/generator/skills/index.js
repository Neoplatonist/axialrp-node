import { SET_SKILLS, SET_SKILLS_ALL } from '../../types';
import { skillQuery } from '../../../db';

/*
 *  Actions
 */
export const setSkills = skills => {
  return { type: SET_SKILLS, payload: skills };
};

export const setSkillsAll = () => {
  return async dispatch => {
    try {
      const skills = await skillQuery();
      dispatch({ type: SET_SKILLS_ALL, payload: skills });
    } catch (err) {
      console.log('setSkillsAll skillQuery', err)
    }
  }
};