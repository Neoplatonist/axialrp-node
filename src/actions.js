import { createSelector } from 'reselect';
import { AbilityMap, AbilityModifier } from './pages/generator/utils';
// Mock Database
import { 
  // alignmentDB, 
  classDB, 
  raceDB,
  // skillsDB
} from './pages/db.js';



/**
 * action types
**/

export const SET_ABILITY = 'SET_ABILITY';
export const SET_ABILITY_MOD = 'SET_ABILITY_MOD';
export const SET_AC = 'SET_AC';
export const SET_ALIGNMENT = 'SET_ALIGNMENT';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CLASS = 'SET_CLASS';
export const SET_DICE = 'SET_DICE';
export const SET_HP = 'SET_HP';
export const SET_INITIATIVE = 'SET_INITIATIVE';
export const SET_INSPIRATION = 'SET_INSPIRATION';
export const SET_PROFICIENCY_BONUS = 'SET_PROFICIENCY_BONUS';
export const SET_RACE = 'SET_RACE';
export const SET_SAVING_THROWS = 'SET_SAVING_THROWS';
export const SET_SPEED = 'SET_SPEED';
export const SET_SKILLS = 'SET_SKILLS'; 
export const SET_SUBRACE = 'SET_SUBRACE';


/**
 * selectors
**/

export const selectDice = state => state.generator.dice;
export const selectRace = state => state.generator.race;
export const selectSubRace = state => state.generator.subrace;
export const selectClass = state => state.generator.class;

export const selectAbility = createSelector(
  state => state.generator.ability,
  selectRace,
  selectSubRace,
  (ability, race, subrace) => {
    const r = raceDB.find(v => v.name === race);
    const sr = r.sub_races.find(v => v.name === subrace);
    return AbilityMap.reduce((v, k, i) =>
      [...v, ability[i] + r.ability_bonus[i] + sr.ability_bonus[i]], []);
  }
);

export const selectAbilityMod = createSelector(
  selectAbility,
  ability => {
    return AbilityMap.reduce((v, k, i) => 
      [...v, AbilityModifier(ability[i])], []);
  }
);

export const selectAlignment = createSelector(
  selectRace,
  race => {
    return raceDB.find( e => e.name === race ).alignment.main;
  }
)

export const selectHP = createSelector(
  selectAbilityMod,
  selectClass,
  (abilityMod, clas) => {
    const hit_die = classDB.find(v => v.name === clas).hit_die;
    return abilityMod[2] + hit_die;
  }
);

export const selectSavingThrows = createSelector(
  selectAbilityMod,
  selectClass,
  (abilityMod, clas) => {
    const saves = classDB.find(v => v.name === clas).saving_throws;
    return AbilityMap.reduce((v, k, i) => 
      [
        ...v,
        saves.some(s => s.name.toLowerCase() === k.toLowerCase()) ? 
          abilityMod[i] : 0
      ], []);
  }
);


/**
 * action creators
**/

// export const selectAbility = state => state.generator.ability;
export const setAbility = (index, ability) => {
  return (dispatch, getState) => {
    const state = [...getState().generator.ability];
    state[index] = ability;
    return dispatch({ type: SET_ABILITY, payload: state });
  }
};

// export const selectAbilityMod = state => state.generator.abilityMod;
export const setAbilityMod = mod => {
  return { type: SET_ABILITY_MOD, payload: mod };
};

export const setAC = ac => {
  return { type: SET_AC, payload: ac };
};

export const setAlignment = alignment => {
  return { type: SET_ALIGNMENT, payload: alignment };
};

export const setCharacter = character => {
  return { type: SET_CHARACTER, payload: character };
};

export const setClass = char_class => {
  return { type: SET_CLASS, payload: char_class };
};

export const setDice = dice => {
  return (dispatch, getState) => {
    dispatch({ type: SET_DICE, payload: dice });
    dispatch({ type: SET_ABILITY, payload: [...dice] });
  };
};

export const setHP = hp => {
  return { type: SET_HP, payload: hp };
};

export const setInitiative = init => {
  return { type: SET_INITIATIVE, payload: init };
};

export const setInspiration = inspire => {
  return { type: SET_INSPIRATION, payload: inspire };
};

export const setProficiencyBonus = proficiency => {
  return { type: SET_PROFICIENCY_BONUS, payload: proficiency };
};

export const setRace = race => {
  return { type: SET_RACE, payload: race };
};

export const setSavingThrows = saves => {
  return { type: SET_SAVING_THROWS, payload: saves };
};

export const setSkills = skills => {
  return { type: SET_SKILLS, payload: skills };
};

export const setSpeed = speed => {
  return { type: SET_SPEED, payload: speed };
};

export const setSubRace = subrace => {
  return { type: SET_SUBRACE, payload: subrace };
};