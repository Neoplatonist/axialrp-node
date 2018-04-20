import { createSelector } from 'reselect';
import { 
  AbilityMap, 
  AbilityModifier, 
  ProficiencyBonus 
} from '../pages/generator/utils';

/**
 * selectors
**/
export const selectAbility = state => state.generator.ability;
export const selectAbilityPoints = state => state.generator.abilityPoints;
export const selectAlignment = state => state.generator.alignment;
export const selectArmor = state => state.generator.armor;
export const selectArmorActive = state => state.generator.armorActive;
export const selectClass = state => state.generator.class;
export const selectClassNameList = state => state.generator.classNameList;
export const selectClassObj = state => state.generator.classObj;
export const selectDice = state => state.generator.dice;
export const selectHP = state => state.generator.hp;
export const selectInitiative = state => state.generator.initiative;
export const selectLanguage = state => state.generator.language;
export const selectLevel = state => state.generator.level;
export const selectRace = state => state.generator.race;
export const selectRaceObj = state => state.generator.raceObj;
export const selectSkills = state => state.generator.skills;
export const selectSpeed = state => state.generator.speed;
export const selectSpellsAll = state => state.generator.spellsAll;
export const selectSubRace = state => state.generator.subrace;
export const selectSubRaceObj = state => state.generator.subraceObj;
export const selectWeapon = state => state.generator.weapon;
export const selectWeaponActive = state => state.generator.weaponActive;



export const selectAbilityRaceMod = createSelector(
  selectRaceObj,
  raceObj => {
    return raceObj.ability_bonus;
  }
);

export const selectAbilitySubRaceMod = createSelector(
  selectSubRaceObj,
  subraceObj => {
    return subraceObj.ability_bonus || [0, 0, 0, 0, 0, 0];
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
  async(ac, armor, abilityMod) => {
    if (isNaN(ac)) ac = 0;
    return armor.reduce((v, k) =>
      v + k.armor_class.base +  
      (k.armor_class.max_bonus || 0) + 
      (k.armor_class.max_bonus ? abilityMod[1] : 0), ac);
  }
);

export const selectArmorProficiency = createSelector(
  state => state.generator.armorAll,
  selectClassObj,
  (armor, classObj) => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      const list = classObj.data.armor.map(v => 
        armor.filter(j => j.category === v.name));
      result.data = [].concat(...list);
    } catch (err) {
      result.status = 'error';
      result.data = [];
    }

    return result;
  }
);

export const selectHPTotal = createSelector(
  selectAbilityMod,
  selectHP,
  (abilityMod, hp) => {
    if (isNaN(hp.data)) hp.data = 0;
    return abilityMod[2] + parseInt(hp.data, 10);
  }
);

export const selectInitiativeTotal = createSelector(
  selectAbilityMod,
  state => state.generator.initiative,
  (abilityMod, initiative) => {
    if (isNaN(initiative)) initiative = 0;
    return abilityMod[1] + parseInt(initiative, 10);
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

export const selectProficiency = createSelector(
  selectLevel,
  level => {
    return ProficiencyBonus(level);
  }
);

export const selectSavingThrows = createSelector(
  selectAbilityMod,
  selectClassObj,
  (abilityMod, classObj) => {
    let result;

    try {
      result = AbilityMap.reduce((v, k, i) => 
        [
          ...v,
          classObj.data.saving_throws.some(s => s.name === k) ? 
            abilityMod[i] : 0
        ], []);
    } catch (err) {
      result = [];
    }

    return result;
  }
);

export const selectSkillsFilter = createSelector(
  selectClassObj,
  classObj => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      result.data = classObj.data.proficiency_choices.find(v => v.type === 'Skill');
      result.status = 'success';
    } catch (err) {
      result.status = 'error';
      result.data = [];
    }

    return result;
  }
);

export const selectSpellsFilter = createSelector(
  selectClassObj,
  selectLevel,
  selectSpellsAll,
  (classObj, level, spellsAll) => {
    let result = {
      status: 'loading',
      data: []
    };

    if (spellsAll.status === 'success' && classObj.status === 'success') {
      if (classObj.data.spellcasting[1] !== null) {
        try {
          // Code below create new array of objects
          result.data = Object.keys(classObj.data.spellcasting)
            .filter(spellLevel => level >= spellLevel)
            .reduce((avail, spellLevel) => [
              ...avail,
              classObj.data.spellcasting[spellLevel]
                .map(spell => spellsAll.data.find(v => v.name === spell))
            ], []);
  
          result.status = 'success';
        } catch (err) {
          // console.log(err)
          result.status = 'error loading';
          result.data = [];
        }
      } else {
        result.status = 'none';
        result.data = [];
      }
    }

    return result;
  }
);

export const selectWeaponProficiency = createSelector(
  selectClassObj,
  selectRaceObj,
  state => state.generator.weaponAll,
  (classObj, raceObj, weaponAll) => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      const raceList = [].concat(
        ...raceObj.weapons.map(v => weaponAll.filter(j => j.name === v)));
  
      const classCat = [].concat(
        ...classObj.data.weapons.map(v => 
          weaponAll.filter(j => j.category === v.name)), 
        ...raceList
      );
  
      const filtered = classCat.reduce((v, k) =>
        [ ...v, classObj.data.weapons.filter(j => j.name === k.name) ], []);
  
      const className = [].concat(
        ...filtered.map(v => weaponAll.filter(j => j.name === v.name)));
      result.status = 'success';
      result.data = [].concat(classCat, className);
    } catch (err) {
      result.status = 'error';
      result.data = [];
    }

    return result;
  }
);