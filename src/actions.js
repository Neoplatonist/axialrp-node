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
  selectDice,
  selectRace,
  selectSubRace,
  (dice, race, subrace) => {
    const r = raceDB.find(v => v.name === race);
    const sr = r.sub_races.find(v => v.name === subrace);
    const ability = AbilityMap.reduce((v, k, i) =>
      [...v, dice[i] + r.ability_bonus[i] + sr.ability_bonus[i]], []);

      console.log(ability)

    return ability;
  }
);

export const selectAbilityMod = createSelector(
  selectAbility,
  (ability) => {
    const mod = AbilityMap.reduce((v, k, i) => 
      [...v, AbilityModifier(ability[i])], []);

    return mod;
  }
);

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
    const calc = AbilityMap.reduce((v, k, i) => [
      ...v,
      saves.some(s => s.name.toLowerCase() === k.toLowerCase()) ? 
        abilityMod[i] : 0
    ], []);

    return calc
  }
);


/**
 * action creators
**/

// export const selectAbility = state => state.generator.ability;
export const setAbility = (index, ability) => {
  console.log({index, ability})
  return (dispatch, getState) => {
    console.log(getState().generator.ability)
    const state = [...getState().generator.ability];
    state[index] = ability;
    console.log(state)
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
  return { type: SET_DICE, payload: dice };
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