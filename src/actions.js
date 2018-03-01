import { createSelector } from 'reselect';
import { AbilityMap, AbilityModifier, isEmpty } from './pages/generator/utils';
// Mock Database
import { 
  // alignmentDB,
  armorDB, 
  classDB, 
  raceDB,
  // skillsDB,
  weaponDB
} from './pages/db.js';



/**
 * action types
**/

export const SET_ABILITY = 'SET_ABILITY';
export const SET_ABILITY_MOD = 'SET_ABILITY_MOD';
export const SET_AC = 'SET_AC';
export const SET_ALIGNMENT = 'SET_ALIGNMENT';
export const SET_ARMOR = 'SET_ARMOR';
export const SET_ARMOR_ACTIVE = 'SET_ARMOR_ACTIVE';
export const SET_CHARACTER = 'SET_CHARACTER';
export const SET_CLASS = 'SET_CLASS';
export const SET_CLASS_OBJ = 'SET_CLASS_OBJ';
export const SET_DICE = 'SET_DICE';
export const SET_HP = 'SET_HP';
export const SET_INITIATIVE = 'SET_INITIATIVE';
export const SET_INSPIRATION = 'SET_INSPIRATION';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_LANGUAGE_LIST = 'SET_LANGUAGE_LIST';
export const SET_LEVEL = 'SET_LEVEL';
export const SET_PROFICIENCY_BONUS = 'SET_PROFICIENCY_BONUS';
export const SET_RACE = 'SET_RACE';
export const SET_RACE_OBJ = 'SET_RACE_OBJ';
export const SET_SAVING_THROWS = 'SET_SAVING_THROWS';
export const SET_SPEED = 'SET_SPEED';
export const SET_SKILLS = 'SET_SKILLS'; 
export const SET_SUBRACE = 'SET_SUBRACE';
export const SET_WEAPON = 'SET_WEAPON';
export const SET_WEAPON_ACTIVE = 'SET_WEAPON_ACTIVE';


/**
 * selectors
**/

export const selectAbility = state => state.generator.ability;
export const selectAlignment = state => state.generator.alignment;
export const selectArmor = state => state.generator.armor;
export const selectArmorActive = state => state.generator.armorActive;
export const selectClass = state => state.generator.class;
export const selectClassObj = state => state.generator.classObj;
export const selectDice = state => state.generator.dice;
export const selectLanguage = state => state.generator.language;
export const selectLevel = state => state.generator.level;
export const selectRace = state => state.generator.race;
export const selectRaceObj = state => state.generator.raceObj;
export const selectSkills = state => state.generator.skills;
export const selectSpeed = state => state.generator.speed;
export const selectSubRace = state => state.generator.subrace;
export const selectWeapon = state => state.generator.weapon;
export const selectWeaponActive = state => state.generator.weaponActive;



export const selectAbilityRaceMod = createSelector(
  selectRaceObj,
  raceObj => {
    return raceObj.ability_bonus;
  }
);

export const selectAbilitySubRaceMod = createSelector(
  selectRaceObj,
  selectSubRace,
  (raceObj, subrace) => {
    if (isEmpty(raceObj.sub_races)) {
      return [0, 0, 0, 0, 0, 0];
    } else {
      const sr = raceObj.sub_races.find(v => v.name === subrace);
      return sr.ability_bonus;
    }
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

export const selectAC = createSelector(
  state => state.generator.ac,
  state => state.generator.armor,
  state => state.generator.abilityMod,
  (ac, list, abilityMod) => {
    const a = list.map(v => armorDB.find(j => v === j.name));
    return a.reduce((v, k) =>
      v + k.armor_class.base + 
      (k.armor_class.max_bonus || 0) + 
      (k.armor_class.max_bonux ? abilityMod[1] : 0), ac);
  }
);

export const selectArmorProficiency = createSelector(
  selectClassObj,
  classObj => {
    const list = classObj.armor.map(v => 
      armorDB.filter(j => j.armor_category === v.name));
    return [].concat(...list);
  }
);

export const selectHP = createSelector(
  selectAbilityMod,
  state => state.generator.hp,
  (abilityMod, hp) => {
    if (isNaN(hp)) hp = 0;
    return abilityMod[2] + parseInt(hp, 10);
  }
);

export const selectLanguageList = createSelector(
  selectRaceObj,
  state => state.generator.language,
  (raceObj, lang) => {
    const list = raceObj.languages.type.map(v => v.name);
    const filter = list.filter(v => v !== lang && v !== '');
    return [...filter, lang];
  }
);

export const selectSavingThrows = createSelector(
  selectAbilityMod,
  selectClassObj,
  (abilityMod, classObj) => {
    return AbilityMap.reduce((v, k, i) => 
      [
        ...v,
        classObj.saving_throws.some(s => s.name === k) ? 
          abilityMod[i] : 0
      ], []);
  }
);

export const selectSkillsFilter = createSelector(
  selectClassObj,
  classObj => {
    return classObj.proficiency_choices.find( v => v.type === 'Skill');
  }
);

export const selectWeaponProficiency = createSelector(
  selectClassObj,
  selectRaceObj,
  (classObj, raceObj) => {
    const raceList = [].concat(
        ...raceObj.weapons.map(v => weaponDB.filter(j => j.name === v)));

    const classCat = [].concat(
      ...classObj.weapons.map(v => 
        weaponDB.filter(j => j.category === v.name)), 
      ...raceList
    );

    const filtered = classCat.reduce((v, k) =>
      [...v, classObj.weapons.filter(j => j.name === k.name) ], []);

    const className = [].concat(
      ...filtered.map(v => weaponDB.filter(j => j.name === v.name)));
    return [].concat(classCat, className);
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

export const setArmor = armor => {
  return { type: SET_ARMOR, payload: armor };
};

export const setArmorActive = active => {
  return { type: SET_ARMOR_ACTIVE, payload: active };
};

export const setCharacter = character => {
  return { type: SET_CHARACTER, payload: character };
};

export const setClass = char_class => {
  return (dispatch, getState) => {
    dispatch({ type: SET_CLASS, payload: char_class });

    const clas = classDB.find(v => v.name === char_class);
    dispatch({ type: SET_CLASS_OBJ, payload: clas });
    dispatch({ type: SET_HP, payload: clas.hit_die });
  };
};

export const setClassObj = clas => {
  return { type: SET_CLASS_OBJ, payload: clas };
};

export const setDice = dice => {
  return (dispatch, getState) => {
    dispatch({ type: SET_DICE, payload: dice });
    dispatch({ type: SET_ABILITY, payload: [...dice] });
  };
};

export const setHP = hp => {
  return { type: SET_HP, payload: hp || 0 };
};

export const setInitiative = init => {
  return { type: SET_INITIATIVE, payload: init };
};

export const setInspiration = inspire => {
  return { type: SET_INSPIRATION, payload: inspire };
};

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setLanguageList = lang => {
  return { type: SET_LANGUAGE_LIST, payload: lang };
};

export const setLevel = level => {
  return { type: SET_LEVEL, payload: level }
};

export const setProficiencyBonus = proficiency => {
  return { type: SET_PROFICIENCY_BONUS, payload: proficiency };
};

export const setRace = race => {
  return dispatch => {
    dispatch({ type: SET_RACE, payload: race });

    const r = raceDB.find(v => v.name === race);
    dispatch({ type: SET_RACE_OBJ, payload: r });
    dispatch({ type: SET_ALIGNMENT, payload: r.alignment.main });
    dispatch({ type: SET_LANGUAGE, payload: '' })
    dispatch({ 
      type: SET_LANGUAGE_LIST,
      payload: r.languages.type.map(v => v.name) 
    });
  };
};

export const setRaceObj = race => {
  return { type: SET_RACE_OBJ, payload: race };
}

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

export const setWeapon = weapon => {
  return { type: SET_WEAPON, payload: weapon };
};

export const setWeaponActive = active => {
  return { type: SET_WEAPON_ACTIVE, payload: active };
};