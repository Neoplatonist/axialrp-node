import { combineReducers } from 'redux';
import { 
  SET_ABILITY,
  SET_ABILITY_MOD,
  SET_AC,
  SET_ALIGNMENT,
  SET_ARMOR,
  SET_ARMOR_ACTIVE,
  SET_CHARACTER,
  SET_CLASS,
  SET_DICE,
  SET_HP,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_LEVEL,
  SET_PROFICIENCY_BONUS,
  SET_RACE,
  SET_SKILLS,
  SET_SPEED,
  SET_SUBRACE,
  SET_WEAPON,
  SET_WEAPON_ACTIVE
} from './actions';

export const generatorState = {
  ability: [0, 0, 0, 0, 0, 0],
  abilityMod: [0, 0, 0, 0, 0, 0],
  ac: 0,
  alignment: 'Lawful Good',
  armor: [],
  armorActive: 'proficiency',

  character: {
    name: '',
    gender: '',
    age: '',
    height: '',
    xp: ''
  },

  class: 'Barbarian',
  dice: [0, 0, 0, 0, 0, 0],
  hp: 12,
  initiative: 0,
  inspiration: 0,
  level: 1,
  proficiencyBonus: 0,
  race: 'Dwarf',

  savingThrows: [0, 0, 0, 0, 0, 0],

  skills: [],

  allSkills: {
    acrobats: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    stealth: 0,
    survival: 0
  },

  speed: 25,
  subrace: 'Hill Dwarf',
  weapon: [],
  weaponActive: 'proficiency'
};

const generator = (state = generatorState, action) => {
  /* eslint-disable indent */
  switch (action.type) {
    case SET_ABILITY: 
      return {
        ...state,
        ability: action.payload
      };

    case SET_ABILITY_MOD: 
      return {
        ...state,
        abilityMod: action.payload
      };

    case SET_AC: 
      return {
        ...state,
        ac: action.payload
      };

    case SET_ALIGNMENT: 
      return {
        ...state,
        alignment: action.payload
      };

    case SET_ARMOR: 
      return {
        ...state,
        armor: action.payload
      };

    case SET_ARMOR_ACTIVE: 
      return {
        ...state,
        armorActive: action.payload
      };

    case SET_CHARACTER: 
      return {
        ...state,
        character: {
          ...state.character,
          ...action.payload
        }
      };

    case SET_CLASS: 
      return {
        ...state,
        class: action.payload
      };

    case SET_DICE: 
      return {
        ...state,
        dice: action.payload
      };

    case SET_HP: 
      return {
        ...state,
        hp: action.payload
      };

    case SET_INITIATIVE: 
      return {
        ...state,
        initiative: action.payload
      };

    case SET_INSPIRATION: 
      return {
        ...state,
        inspiration: action.payload
      };

    case SET_LEVEL: 
      return {
        ...state,
        level: action.payload
      };

    case SET_PROFICIENCY_BONUS: 
      return {
        ...state,
        proficiencyBonus: action.payload
      };

    case SET_RACE: 
      return { 
        ...state,
        race: action.payload
      };

    case SET_SKILLS: 
      return {
        ...state,
        skills: {
          ...state.skills,
          ...action.payload
        }
      };

    case SET_SPEED: 
      return { 
        ...state,
        speed: action.payload
      };

    case SET_SUBRACE: 
      return { 
        ...state,
        subrace: action.payload
      };

    case SET_WEAPON: 
      return { 
        ...state,
        weapon: action.payload
      };

      case SET_WEAPON_ACTIVE: 
      return { 
        ...state,
        weaponActive: action.payload
      };
  
    default:
      return state;
  }
  /* eslint-enable indent */
};

const reducers = combineReducers({
  generator
});

export default reducers;
