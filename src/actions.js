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
export const SET_LEVEL = 'SET_LEVEL';
export const SET_PROFICIENCY_BONUS = 'SET_PROFICIENCY_BONUS';
export const SET_RACE = 'SET_RACE';
export const SET_SAVING_THROWS = 'SET_SAVING_THROWS';
export const SET_SPEED = 'SET_SPEED';
export const SET_SKILLS = 'SET_SKILLS'; 
export const SET_SUBRACE = 'SET_SUBRACE';


/**
 * selectors
**/

export const selectAbility = state => state.generator.ability;
export const selectAlignment = state => state.generator.alignment;
export const selectDice = state => state.generator.dice;
export const selectLevel = state => state.generator.level;
export const selectRace = state => state.generator.race;
export const selectSubRace = state => state.generator.subrace;
export const selectClass = state => state.generator.class;

export const selectAbilityRaceMod = createSelector(
  selectRace,
  race => {
    const r = raceDB.find(v => v.name === race);
    return r.ability_bonus;
  }
);

export const selectAbilitySubRaceMod = createSelector(
  selectRace,
  selectSubRace,
  (race, subrace) => {
    const r = raceDB.find(v => v.name === race);
    const sr = r.sub_races.find(v => v.name === subrace);
    return sr.ability_bonus;
  }
);

export const selectAbilityTotal = createSelector(
  selectAbility,
  selectAbilityRaceMod,
  selectAbilitySubRaceMod,
  (ability, race, subrace) => {
    return ability.map((v, k) => v + race[k] + subrace[k]);
  }
);

export const selectAbilityMod = createSelector(
  selectAbilityTotal,
  ability => {
    return ability.map((v, k) => AbilityModifier(v));
  }
);

export const selectHP = createSelector(
  selectAbilityMod,
  state => state.generator.hp,
  (abilityMod, hp) => {
    return abilityMod[2] + parseInt(hp, 10);
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
        saves.some(s => s.name === k) ? 
          abilityMod[i] : 0
      ], []);
  }
);

export const selectSkills = createSelector(
  selectClass,
  clas => {
    return classDB.find( v => v.name === clas)
      .proficiency_choices.find( v => v.type === 'Skill');
  }
);


/**
 * action creators
**/

// export const selectAbility = state => state.generator.ability;
export const setAbility = (index, ability) => {
  if (isNaN(ability)) ability = 0;

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
  return dispatch => {
    dispatch({ type: SET_CLASS, payload: char_class });

    const hit_die = classDB.find(v => v.name === char_class).hit_die;
    dispatch({ type: SET_HP, payload: hit_die });
  };
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

export const setLevel = level => {
  return { type: SET_LEVEL, payload: level }
}

export const setProficiencyBonus = proficiency => {
  return { type: SET_PROFICIENCY_BONUS, payload: proficiency };
};

export const setRace = race => {
  return dispatch => {
    dispatch({ type: SET_RACE, payload: race });

    const alignment = raceDB.find(v => v.name === race).alignment.main;
    dispatch({ type: SET_ALIGNMENT, payload: alignment});
  };
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