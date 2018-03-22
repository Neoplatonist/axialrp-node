import { createSelector } from 'reselect';
import { 
  AbilityMap, 
  AbilityModifier, 
  ProficiencyBonus 
} from '../pages/generator/utils';

// Mock Database
import { 
  // alignmentDB,
  armorDB, 
  // classDB, 
  // raceDB,
  // skillsDB,
  spellsDB,
  weaponDB
} from '../pages/db.js';

/**
 * selectors
**/
export const selectAbility = state => state.generator.ability;
export const selectAbilityPoints = state => state.generator.abilityPoints;
export const selectAlignment = state => state.generator.alignment;
export const selectArmor = state => state.generator.armor;
export const selectArmorActive = state => state.generator.armorActive;
export const selectClass = state => state.generator.class;
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
  (ac, list, abilityMod) => {
    if (isNaN(ac)) ac = 0;
    const a = list.map(v => armorDB.find(j => v === j.name));
    return a.reduce((v, k) =>
      v + k.armor_class.base + 
      (k.armor_class.max_bonus || 0) + 
      (k.armor_class.max_bonus ? abilityMod[1] : 0), ac);
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

export const selectHPTotal = createSelector(
  selectAbilityMod,
  state => state.generator.hp,
  (abilityMod, hp) => {
    if (isNaN(hp)) hp = 0;
    return abilityMod[2] + parseInt(hp, 10);
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

export const selectSpellsFilter = createSelector(
  selectClass,
  clas => {
    return [].concat(...spellsDB.map(v => 
      v.classes.some(f => f.name === clas) ? v : []));
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
      [ ...v, classObj.weapons.filter(j => j.name === k.name) ], []);

    const className = [].concat(
      ...filtered.map(v => weaponDB.filter(j => j.name === v.name)));
    return [].concat(classCat, className);
  }
);