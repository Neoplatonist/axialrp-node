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
  SET_CLASS_OBJ,
  SET_DICE,
  SET_HP,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_LEVEL,
  SET_PROFICIENCY_BONUS,
  SET_RACE,
  SET_RACE_OBJ,
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
  classObj: {
    name: 'Barbarian',
    hit_die: 12,
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Animal Handling' },
          { name: 'Athletics' },
          { name: 'Intimidation' },
          { name: 'Nature' },
          { name: 'Perception' },
          { name: 'Survival' }
        ]
      }
    ],
    proficiencies: [
      {
        type: 'Armor',
        list: [
          { name: 'Light' },
          { name: 'Medium' },
          { name: 'Shield' }
        ]
      }, {
        type: 'Weapons',
        list: [
          { name: 'Simple' },
          { name: 'Martial' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Barbarian' },
    spellcasting: {}
  },
  dice: [0, 0, 0, 0, 0, 0],
  hp: 12,
  initiative: 0,
  inspiration: 0,
  level: 1,
  proficiencyBonus: 0,
  race: 'Dwarf',
  raceObj: {
    name: 'Dwarf',
    ability_bonus: [ 0, 0, 2, 0, 0, 0 ],
    // ability_bonus: { constitution: 2 },
    age: {
      adult: 50,
      description: 'Dwarves mature at the same rate as humans, but theyâ€™re considered young until they reach the age of 50. On average, they live about 350 years.',
      max: 350 
    },
    alignment: {
      description: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
      main: 'Lawful Good',
    },
    size: {
      description: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
      height: {
        min: 4,
        max: 5
      },
      size: 'Medium'
    },
    speed: {
      base: 25,
      description: 'Your speed is not reduced by wearing heavy armor.'
    },
    darkvision: {
      distance: 60,
      description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
    },
    languages: {
      description: 'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
      type: ['Common', 'Dwarvish']
    },
    sub_races: [
      {
        name: 'Hill Dwarf',
        description: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
        ability_bonus: [ 0, 0, 0, 0, 1, 0 ],
        hit_points: {}
      }
    ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tool_proficiency: {
      choose: 1,
      type: 'Artisan',
      tools: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    proficiency: ['Battleaxe', 'Handaxe', 'Light Hammer', 'Warhammer']
  },

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
    
    case SET_CLASS_OBJ:
      return {
        ...state,
        classObj: action.payload
      }

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

    case SET_RACE_OBJ:
      return {
        ...state,
        raceObj: action.payload
      }

    case SET_SKILLS: 
      return {
        ...state,
        skills: action.payload
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
