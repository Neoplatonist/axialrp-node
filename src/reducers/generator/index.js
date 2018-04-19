import { 
  SET_ABILITY,
  SET_ABILITY_MOD,
  SET_ABILITY_POINTS,
  SET_ABILITY_TYPE,
  SET_AC,
  SET_ALIGNMENT,
  SET_ALIGNMENT_ALL,
  SET_ARMOR,
  SET_ARMOR_ACTIVE,
  SET_ARMOR_ALL,
  SET_CHARACTER,
  SET_CLASS,
  SET_CLASS_OBJ_ERROR,
  SET_CLASS_OBJ_LOADING,
  SET_CLASS_OBJ_SUCCESS,
  SET_DICE,
  SET_HP_ERROR,
  SET_HP_LOADING,
  SET_HP_SUCCESS,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_LANGUAGE,
  SET_LANGUAGE_LIST,
  SET_LEVEL,
  SET_PROFICIENCY_BONUS,
  SET_RACE,
  SET_RACE_OBJ,
  SET_SKILLS,
  SET_SKILLS_ALL,
  SET_SPEED,
  SET_SPELLS_ALL_ERROR,
  SET_SPELLS_ALL_LOADING,
  SET_SPELLS_ALL_SUCCESS,
  SET_SPELLS_LIST,
  SET_SPELLS_SELECTED,
  SET_SUBRACE,
  SET_SUBRACE_OBJ,
  SET_WEAPON,
  SET_WEAPON_ACTIVE,
  SET_WEAPON_ALL
} from '../../actions';
export { 
  SET_ABILITY,
  SET_ABILITY_MOD,
  SET_ABILITY_POINTS,
  SET_ABILITY_TYPE,
  SET_AC,
  SET_ALIGNMENT,
  SET_ALIGNMENT_ALL,
  SET_ARMOR,
  SET_ARMOR_ACTIVE,
  SET_ARMOR_ALL,
  SET_CHARACTER,
  SET_CLASS,
  SET_CLASS_OBJ_ERROR,
  SET_CLASS_OBJ_LOADING,
  SET_CLASS_OBJ_SUCCESS,
  SET_DICE,
  SET_HP_ERROR,
  SET_HP_LOADING,
  SET_HP_SUCCESS,
  SET_INITIATIVE,
  SET_INSPIRATION,
  SET_LANGUAGE,
  SET_LANGUAGE_LIST,
  SET_LEVEL,
  SET_PROFICIENCY_BONUS,
  SET_RACE,
  SET_RACE_OBJ,
  SET_SKILLS,
  SET_SKILLS_ALL,
  SET_SPEED,
  SET_SPELLS_ALL_ERROR,
  SET_SPELLS_ALL_LOADING,
  SET_SPELLS_ALL_SUCCESS,
  SET_SPELLS_LIST,
  SET_SPELLS_SELECTED,
  SET_SUBRACE,
  SET_SUBRACE_OBJ,
  SET_WEAPON,
  SET_WEAPON_ACTIVE,
  SET_WEAPON_ALL
} from '../../actions';
// import {...} from './actions';

export const generatorState = {
  ability: [0, 0, 0, 0, 0, 0],
  abilityMod: [0, 0, 0, 0, 0, 0],
  abilityPoints: 27,
  abilityType: 'Dice',
  ac: 0,
  alignment: 'Lawful Good',
  alignmentAll: [],

  armor: [],
  armorActive: 'proficiency',
  armorAll: [],

  character: {
    name: '',
    gender: '',
    age: 50,
    height: '4ft',
    xp: 0
  },

  class: 'Barbarian',
  classObj: { status: 'success', data: {
    name: "Barbarian",
    hit_die: 12,
    armor: [
      { name: "Light" },
      { name: "Medium" },
      { name: "Shield"}
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: "Skill",
        from: [
          { name: "Animal Handling" },
          { name: "Athletics" },
          { name: "Intimidation" },
          { name: "Nature" },
          { name: "Perception" },
          { name: "Survival" }
        ]
      }
    ],
    saving_throws: [
      { name: "Strength" },
      { name: "Constitution" }
    ],
    sub_classes: null,
    levels: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    },
    spellcasting: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null
    },
    weapons: [
      { name: "Simple" },
      { name: "Martial" }
    ]
  }},

  dice: [0, 0, 0, 0, 0, 0],
  hp: { status: 'none', data: 12 },
  initiative: 0,
  inspiration: 0,
  language: '',
  languageList: ['Common', 'Dwarvish'],
  level: 1,
  proficiencyBonus: 0,

  race: 'Dwarf',
  raceObj: {
    name: 'Dwarf',
    description: 'Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.',
    ability_bonus: [ 0, 0, 2, 0, 0, 0 ],
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
    languages: {
      description: 'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Dwarvish' }
      ]
    },
    traits: [
      { 
        name: 'Darkvision',
        description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.'
      },
      { 
        name: 'Dwarven Resilience',
        description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
      },
      { 
        name: 'Stonecunning',
        description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'
      }
    ],
    sub_races: [ {name: 'Hill Dwarf'} ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    skills: {},
    tools: {
      choose: 1,
      type: 'Artisan',
      list: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    weapons: ['Battleaxe', 'Handaxe', 'Light Hammer', 'Warhammer'],
  },

  savingThrows: [0, 0, 0, 0, 0, 0],

  skills: [],
  skillsAll: [],

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
  spellsAll: { status: 'none', data: [] },
  spellsList: [],
  spellsSelected: {},

  subrace: 'Hill Dwarf',
  subraceObj: {
    name: 'Hill Dwarf',
    description: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
    ability_bonus: [0, 0, 0, 0, 0, 0],
    hit_points: 1,
    age: {},
    alignment: {},
    size: {},
    speed: {},
    darkvision: {
      distance: 60,
      description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
    },
    languages: {},
    traits: [
      { 
        name: 'Dwarven Toughness',
        description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
      }
    ],
    saving_throws: {},
    skills: {},
    tools: {},
    weapons: []
  },

  weapon: [],
  weaponActive: 'proficiency',
  weaponAll: []
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

    case SET_ABILITY_POINTS:
      return {
        ...state,
        abilityPoints: action.payload
      }

    case SET_ABILITY_TYPE:
      return {
        ...state,
        abilityType: action.payload
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

    case SET_ALIGNMENT_ALL:
      return {
        ...state,
        alignmentAll: action.payload
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

    case SET_ARMOR_ALL:
      return {
        ...state,
        armorAll: action.payload
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
    
    case SET_CLASS_OBJ_ERROR:
      return {
        ...state,
        classObj: { 
          ...action.payload 
        }
      };

    case SET_CLASS_OBJ_LOADING:
      return {
        ...state,
        classObj: { 
          ...action.payload
        }
      };

    case SET_CLASS_OBJ_SUCCESS:
      return {
        ...state,
        classObj: { 
          ...action.payload 
        }
      };

    case SET_DICE: 
      return {
        ...state,
        dice: action.payload
      };

    case SET_HP_ERROR: 
      return {
        ...state,
        hp: {
          ...action.payload
        }
      };

    case SET_HP_LOADING: 
      return {
        ...state,
        hp: {
          ...action.payload
        }
      };

    case SET_HP_SUCCESS: 
      return {
        ...state,
        hp: {
          ...action.payload
        }
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

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };

    case SET_LANGUAGE_LIST:
      return {
        ...state,
        languageList: action.payload
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

    case SET_SKILLS_ALL:
      return {
        ...state,
        skillsAll: action.payload
      };

    case SET_SPEED: 
      return { 
        ...state,
        speed: action.payload
      };

    case SET_SPELLS_ALL_ERROR:
      return {
        ...state,
        spellsAll: {
          ...action.payload
        }
      };

    case SET_SPELLS_ALL_LOADING:
      return {
        ...state,
        spellsAll: {
          ...action.payload
        }
      };

    case SET_SPELLS_ALL_SUCCESS:
      return {
        ...state,
        spellsAll: {
          ...action.payload
        }
      };

    case SET_SPELLS_LIST:
      return {
        ...state,
        spellsList: action.payload
      };

    case SET_SPELLS_SELECTED:
      return {
        ...state,
        spellsSelected: action.payload
      };

    case SET_SUBRACE: 
      return { 
        ...state,
        subrace: action.payload
      };

    case SET_SUBRACE_OBJ:
      return {
        ...state,
        subraceObj: action.payload
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

    case SET_WEAPON_ALL:
      return {
        ...state,
        weaponAll: action.payload
      };
  
    default:
      return state;
  }
  /* eslint-enable indent */
};

export default generator;
