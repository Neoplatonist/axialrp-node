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
export const selectArmorAll = state => state.generator.armorAll;
export const selectClass = state => state.generator.class;
export const selectClassNameList = state => state.generator.classNameList;
export const selectClassObj = state => state.generator.classObj;
export const selectDice = state => state.generator.dice;
export const selectHP = state => state.generator.hp;
export const selectInitiative = state => state.generator.initiative;
export const selectLanguage = state => state.generator.language;
export const selectLevel = state => state.generator.level;
export const selectRace = state => state.generator.race;
export const selectRaceNameList = state => state.generator.raceNameList;
export const selectRaceObj = state => state.generator.raceObj;
export const selectSkills = state => state.generator.skills;
export const selectSpeed = state => state.generator.speed;
export const selectSpellsAll = state => state.generator.spellsAll;
export const selectSubRace = state => state.generator.subrace;
export const selectSubRaceObj = state => state.generator.subraceObj;
export const selectWeapon = state => state.generator.weapon;
export const selectWeaponActive = state => state.generator.weaponActive;
export const selectWeaponAll = state => state.generator.weaponAll;



export const selectAbilityRaceMod = createSelector(
  state => state.generator.raceObj,
  raceObj => {
    let result = {
      status: 'loading',
      data: [0, 0, 0, 0, 0, 0]
    };

    try {
      result.data = raceObj.data.abilityBonus || [0, 0, 0, 0, 0, 0];
      result.status = 'success';
    } catch (err) {
      result.data = [0, 0, 0, 0, 0, 0];
      result.status = raceObj.status;
    }

    return result;
  }
);

export const selectAbilitySubRaceMod = createSelector(
  selectSubRaceObj,
  subraceObj => {
    return subraceObj.abilityBonus || [0, 0, 0, 0, 0, 0];
  }
);

export const selectAbilityTotal = createSelector(
  selectAbility,
  selectAbilityRaceMod,
  selectAbilitySubRaceMod,
  (ability, race, subrace) => {
    let result = {
      status: 'loading',
      data: [0, 0, 0, 0, 0, 0]
    };

    try {
      result.data = ability.map((v, k) => v + race.data[k] + subrace[k]);
      result.status = 'success';
    } catch (err) {
      result = [0, 0, 0, 0, 0, 0];
      result.status = 'error';
    }

    return result;
  }
);

export const selectAbilityMod = createSelector(
  selectAbilityTotal,
  ability => {
    let result = {
      status: 'loading',
      data: [0, 0, 0, 0, 0, 0]
    };

    try {
      result.data = ability.data.map(v => AbilityModifier(v));
      result.status = 'success';
    } catch (err) {
      result.data = [0, 0, 0, 0, 0, 0];
      result.status = ability.status;
    }

    return result;
  }
);

export const selectAC = createSelector(
  state => state.generator.ac,
  selectArmor,
  selectAbilityMod,
  (ac, armor, abilityMod) => {
    let result = {
      status: 'loading',
      data: 0
    };

    try {
      if (isNaN(ac)) ac = 0;
      result.data = armor.reduce((v, k) =>
        v + k.armorClass.base +  
        (k.armorClass.maxBonus || 0) + 
        (k.armorClass.maxBonus ? abilityMod.data[1] : 0), ac);
      result.status = 'success';
    } catch (err) {
      result.data = 0;
      result.status = 'error';
    }

    return result;
  }
);

export const selectArmorProficiency = createSelector(
  selectArmorAll,
  selectClassObj,
  (armor, classObj) => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      const list = classObj.data.armor.map(v => 
        armor.data.filter(j => j.category === v.name));
      result.data = [].concat(...list);
      result.status = result.data.length ? 'success' : 'loading';
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
    let result = {
      status: 'loading',
      data: 0
    };

    try {
      if (isNaN(hp)) hp = 0;
      result.data = abilityMod.data[2] + parseInt(hp, 10);
      result.status = 'success';
    } catch (err) {
      result.data = 0;
      result.status = 'error';
    }

    return result;
  }
);

export const selectInitiativeTotal = createSelector(
  selectAbilityMod,
  state => state.generator.initiative,
  (abilityMod, initiative) => {
    let result = {
      status: 'loading',
      data: 0
    };

    try {
      if (isNaN(initiative)) initiative = 0;
      result.data = abilityMod.data[1] + parseInt(initiative, 10);
      result.status = 'success';
    } catch (err) {
      result.data = 0;
      result.status = 'error';
    }

    return result;
  }
);

export const selectLanguageList = createSelector(
  selectRaceObj,
  state => state.generator.language,
  (raceObj, lang) => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      const list = raceObj.data.languages.type.map(v => v.name);
      const filter = list.filter(v => v !== lang && v !== '');
      result.data = [...filter, lang];
      result.status = 'success';
    } catch (err) {
      result.data = [];
      result.status = raceObj.status;
    }

    return result;
  }
);

export const selectLevelObj = createSelector(
  selectClassObj,
  selectLevel,
  (classObj, level) => {
    let result = {
      status: 'loading',
      data: {}
    };

    if (classObj.status === 'success') {
      result.data = classObj.data.levels[level];
      result.status = 'success';
    }

    return result;
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
    let result = {
      status: 'loading',
      data: [0, 0, 0, 0, 0, 0,]
    };

    try {
      result.data = AbilityMap.reduce((v, k, i) => 
        [
          ...v,
          classObj.data.savingThrows.some(s => s.name === k) ? 
            abilityMod.data[i] : 0
        ], []);
      result.status = 'success';
    } catch (err) {
      result.data = [0, 0, 0, 0, 0, 0,];
      result.status = 'error';
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
      result.data = classObj.data.proficiencyChoices.find(v => v.type === 'Skill');
      result.status = 'success';
    } catch (err) {
      result.data = [];
      result.status = classObj.status;
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

    try {
      const spellLevel = classObj.data.levels[level].type;

      result.data = Object.keys(classObj.data.spellcasting)
        .filter(spellLvl => spellLevel.length > spellLvl)
        .reduce((avail, spellLvl) => [
          ...avail,
          classObj.data.spellcasting[spellLvl]
            .map(spell => spellsAll.data.find(v => v.name === spell))
        ], []);

      result.data == undefined || result.data === []
        ? result.status = 'loading'
        : result.status = 'success';

    } catch (err) {
      result.data = [];
      result.status = 'none';
    }

    return result;
  }
);

export const selectSpellsLock = createSelector(
  selectClassObj,
  selectLevel,
  state => state.generator.spellsSelected,
  (classObj, level, selected) => {
    let result;

    try {
      const levelObj = classObj.data.levels[level];
      const list = Object.keys(selected).reduce((p, c, k) => {
        p[k] = selected[c].length;
        return p;
      }, {});

      const listBool = Object.keys(selected).reduce((p, c, k) => {
        p[k] = selected[c].length >= levelObj.type[k];
        return p;
      }, {});

      const accum = Object.keys(list).reduce((p, c) => p + list[c], 0);

      result = {
        total: accum >= levelObj.spellsKnown,
        ...listBool
      };
    } catch (err) {
      let list = {};
      for (let i = 0; i <= level; i++) {
        list[i] = false;
      }

      result = {
        total: false,
        ...list
      };
    }

    return result;
  }
);

export const selectWeaponProficiency = createSelector(
  selectClassObj,
  selectRaceObj,
  selectWeaponAll,
  (classObj, raceObj, weaponAll) => {
    let result = {
      status: 'loading',
      data: []
    };

    try {
      const raceList = [].concat(
        ...raceObj.data.weapons.map(v => weaponAll.data.filter(j => j.name === v)));

      const classCat = [].concat(
        ...classObj.data.weapons.map(v => 
          weaponAll.data.filter(j => j.category === v.name)), 
        ...raceList
      );

      const filtered = classCat.reduce((v, k) =>
        [ ...v, classObj.data.weapons.filter(j => j.name === k.name) ], []);

      const className = [].concat(
        ...filtered.map(v => weaponAll.data.filter(j => j.name === v.name)));

      result.data = [].concat(classCat, className);
      result.status = result.data.length ? 'success' : 'loading';
    } catch (err) {
      result.data = [];
      result.status = 'error';
    }

    return result;
  }
);