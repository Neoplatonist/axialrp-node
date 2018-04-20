import { 
  SET_SKILLS, 
  SET_SKILLS_ALL_ERROR,
  SET_SKILLS_ALL_LOADING,
  SET_SKILLS_ALL_SUCCESS 
} from '../../types';
import { skillQuery } from '../../../db';

/*
 *  Actions
 */
export const setSkills = skills => {
  return { type: SET_SKILLS, payload: skills };
};

export const setSkillsAll = () => {
  return async dispatch => {
    let load = {
      status: 'loading',
      data: []
    };

    dispatch({ type: SET_SKILLS_ALL_LOADING, payload: load });

    try {
      load.data = await skillQuery();
      load.status = 'success';
      dispatch({ type: SET_SKILLS_ALL_SUCCESS, payload: load });
    } catch (err) {
      load.data = [];
      load.status = 'error';
      dispatch({ type: SET_SKILLS_ALL_ERROR, payload: load });
    }
  }
};