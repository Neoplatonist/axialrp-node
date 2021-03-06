
const classDB = [
  {
    name: 'Barbarian',
    hit_die: 12,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Shield' }
    ],
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
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Barbarian' },
    levels: {
      1: {
        features: ['Rage', 'Unarmored Defense'],
        proficiency_bonus: 2,
        rages: '2',
        rage_damage: 2
      },
      2: {
        features: ['Reckless Attack', 'Danger Sense'],
        proficiency_bonus: 2,
        rages: '2',
        rage_damage: 2
      },
      3: {
        features: ['Primal Path'],
        proficiency_bonus: 2,
        rages: '3',
        rage_damage: 2
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        rages: '3',
        rage_damage: 2
      },
      5: {
        features: ['Extra Attack', 'Fast Movement'],
        proficiency_bonus: 3,
        rages: '3',
        rage_damage: 2
      },
      6: {
        features: ['Path Feature'],
        proficiency_bonus: 3,
        rages: '4',
        rage_damage: 2
      },
      7: {
        features: ['Feral Instinct'],
        proficiency_bonus: 3,
        rages: '4',
        rage_damage: 2
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        rages: '4',
        rage_damage: 2
      },
      9: {
        features: ['Brutal Critical (1 dice)'],
        proficiency_bonus: 4,
        rages: '4',
        rage_damage: 3
      },
      10: {
        features: ['Path Feature'],
        proficiency_bonus: 4,
        rages: '4',
        rage_damage: 3
      },
      11: {
        features: ['Relentless Rage'],
        proficiency_bonus: 4,
        rages: '4',
        rage_damage: 3
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        rages: '5',
        rage_damage: 3
      },
      13: {
        features: ['Brutal Critical (2 dice)'],
        proficiency_bonus: 5,
        rages: '5',
        rage_damage: 3
      },
      14: {
        features: ['Path Feature'],
        proficiency_bonus: 5,
        rages: '5',
        rage_damage: 3
      },
      15: {
        features: ['Persistent Rage'],
        proficiency_bonus: 5,
        rages: '5',
        rage_damage: 3
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        rages: '5',
        rage_damage: 4
      },
      17: {
        features: ['Brutal Critical (3 dice)'],
        proficiency_bonus: 6,
        rages: '6',
        rage_damage: 4
      },
      18: {
        features: ['Indomitable Might'],
        proficiency_bonus: 6,
        rages: '6',
        rage_damage: 4
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        rages: '6',
        rage_damage: 4
      },
      20: {
        features: ['Primal Champion'],
        proficiency_bonus: 6,
        rages: 'unlimited',
        rage_damage: 4
      },
    },
    spellcasting: {},
    weapons: [
      { name: 'Simple' },
      { name: 'Martial' }
    ]
  },
  {
    name: 'Bard',
    hit_die: 8,
    armor: [
      { name: 'Light' }
    ],
    proficiency_choices: [
      {
        choose: 3,
        type: 'Skill',
        from: [
          { name: 'Acrobatics' },
          { name: 'Animal Handling' },
          { name: 'Arcana' },
          { name: 'Athletics' },
          { name: 'Deception' },
          { name: 'History' },
          { name: 'Insight' },
          { name: 'Intimidation' },
          { name: 'Investigation' },
          { name: 'Medicine' },
          { name: 'Nature' },
          { name: 'Perception' },
          { name: 'Performance' },
          { name: 'Persuasion' },
          { name: 'Religion' },
          { name: 'Sleight of Hand' },
          { name: 'Stealth' },
          { name: 'Survival' }
        ]
      }, {
        choose: 3,
        type: 'Instruments',
        from: [
          { name: 'Bagpipes' },
          { name: 'Drum' },
          { name: 'Dulcimer' },
          { name: 'Flute' },
          { name: 'Lute' },
          { name: 'Lyre' },
          { name: 'Horn' },
          { name: 'Pan flute' },
          { name: 'Shawm' },
          { name: 'Viol' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Dexterity' },
      { name: 'Charisma' }
    ],
    starting_equipment: { class: 'Bard' },
    sub_classes: [
      {
        name: 'College of Lore',
        description: 'Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college\'s members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Spellcasting: Bard', 'Bardic Inspiration(d6)'],
        proficiency_bonus: 2,
        spells_known: 4,
        type: [2, 2]
      },
      2: {
        features: ['Jack of All Trades', 'Song of Rest(d6)'],
        proficiency_bonus: 2,
        spells_known: 5,
        type: [2, 3]
      },
      3: {
        features: ['Bard College', 'Expertise'],
        proficiency_bonus: 2,
        spells_known: 6,
        type: [2, 4, 2]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 7,
        type: [3, 4, 3]
      },
      5: {
        features: ['Bardic Inspiration(d8)', 'Font of Inspiration'],
        proficiency_bonus: 3,
        spells_known: 8,
        type: [2, 4, 3, 2]
      },
      6: {
        features: ['Countercharm', 'Bard College feature'],
        proficiency_bonus: 3,
        spells_known: 9,
        type: [3, 4, 3, 3]
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 10,
        type: [3, 4, 3, 3, 1]
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        spells_known: 11,
        type: [3, 4, 3, 3, 2]
      },
      9: {
        features: ['Song of Rest(d8)'],
        proficiency_bonus: 4,
        spells_known: 12,
        type: [3, 4, 3, 3, 3, 1]
      },
      10: {
        features: ['Bardic Inspiration(d10)', 'Expertise', 'Magical Secrets'],
        proficiency_bonus: 4,
        spells_known: 14,
        type: [4, 4, 3, 3, 3, 2]
      },
      11: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 15,
        type: [4, 4, 3, 3, 3, 2, 1]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 15,
        type: [4, 4, 3, 3, 3, 2, 1]
      },
      13: {
        features: ['Song of Rest(d10)'],
        proficiency_bonus: 5,
        spells_known: 16,
        type: [4, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        features: ['Magical Secrets', 'Bard College feature'],
        proficiency_bonus: 5,
        spells_known: 18,
        type: [4, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        features: ['Bardic Inspiration(d12)'],
        proficiency_bonus: 5,
        spells_known: 19,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 19,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 19,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        features: ['Song of Rest (d12)'],
        proficiency_bonus: 6,
        spells_known: 20,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        features: ['Magical Secrets'],
        proficiency_bonus: 6,
        spells_known: 22,
        type: [4, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 22,
        type: [4, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        features: ['Superior Inspiration'],
        proficiency_bonus: 6,
        spells_known: 22,
        type: [4, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      },
    },
    spellcasting: {
      0:  ['Dancing Lights', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Prestidigitation', 'True Strike', 'Vicious Mockery'],
      1: ['Animal Friendship', 'Bane', 'Charm Person', 'Comprehend Languages', 'Cure Wounds', 'Detect Magic', 'Disguise Self', 'Faerie Fire', 'Feather Fall', 'Healing Word', 'Heroism', 'Hideous Laughter', 'Identify', 'Illusory Script', 'Longstrider', 'Silent Image', 'Sleep', 'Speak with Animals', 'Thunderwave', 'Unseen Servant'],
      2: ['Animal Messenger', 'Blindness/Deafness', 'Calm Emotions', 'Detect Thoughts', 'Enhance Ability', 'Enthrall', 'Heat Metal', 'Hold Person', 'Invisibility', 'Knock', 'Lesser Restoration', 'Locate Animals or Plants', 'Locate Object', 'Magic Mouth', 'See Invisbility', 'Shatter', 'Silence', 'Suggestion', 'Zone of Truth'],
      3: ['Bestow Curse', 'Clairvoyance', 'Dispel Magic', 'Fear', 'Glyph of Warding', 'Hypnotic Pattern', 'Major Image', 'Nondetection', 'Plant Growth', 'Sending', 'Speak with Dead', 'Speak with Plants', 'Stinking Cloud', 'Tiny Hut', 'Tongues'],
      4: ['Compulsion', 'Confusion', 'Dimension Door', 'Freedom of Movement', 'Greater Invisibility', 'Hallucinatory Terrain', 'Locate Creature', 'Polymorph'],
      5: ['Animate Objects', 'Awaken', 'Dominate Person', 'Dream', 'Geas', 'Greater Restoration', 'Hold Monster', 'Legend Lore', 'Mass Cure Wounds', 'Mislead', 'Modify Memory', 'Planar Binding', 'Raise Dead', 'Scrying', 'Seeming', 'Teleportation'],
      6: ['Eyebite', 'Find the Path', 'Guards and Wards', 'Irresistible Dance', 'Mass Suggestion', 'Programmed Illusion', 'True Seeing'],
      7: ['Arcane Sword', 'Etherealness', 'Forcecage', 'Magnificent Mansion', 'Mirage Arcane', 'Project Image', 'Regenerate', 'Resurrection', 'Symbol', 'Teleport'],
      8: ['Dominate Monster', 'Feeblemind', 'Glibness', 'Mind Blank', 'Power Word Stun'],
      9: ['Foresight', 'Power Word Kill', 'True Polymorph'],
    },
    weapons: [
      { name: 'Simple' },
      { name: 'Longsword' },
      { name: 'Rapier' },
      { name: 'Shortsword' },
      { name: 'Crossbows, hand' }
    ]
  },
  {
    name: 'Cleric',
    hit_die: 8,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Shield' }
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'History' },
          { name: 'Insight' },
          { name: 'Medicine' },
          { name: 'Persuasion' },
          { name: 'Religion' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Wisdom' },
      { name: 'Charisma' }
    ],
    starting_equipment: { class: 'Cleric' },
    sub_classes: [
      {
        name: 'College of Lore',
        description: 'The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Spellcasting: Cleric', 'Divine Domain', 'Divine Domain Spells'],
        proficiency_bonus: 2,
        spells_known: 5,
        type: [3, 2]
      },
      2: {
        features: ['Channel Divinity (1/rest)', 'Divine Domain feature'],
        proficiency_bonus: 2,
        spells_known: 6,
        type: [3, 3]
      },
      3: {
        features: [],
        proficiency_bonus: 2,
        spells_known: 9,
        type: [3, 4, 2]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 11,
        type: [4, 4, 3]
      },
      5: {
        features: ['Destroy Undead (CR 1/2)'],
        proficiency_bonus: 3,
        spells_known: 13,
        type: [4, 4, 3, 2]
      },
      6: {
        features: ['Channel Divinity (2/rest)', 'Divine Domain feature'],
        proficiency_bonus: 3,
        spells_known: 14,
        type: [4, 4, 3, 3]
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 15,
        type: [4, 4, 3, 3, 1]
      },
      8: {
        features: ['Ability Score Improvement',  'Destroy Undead (CR 1)', 'Divine Domain feature'],
        proficiency_bonus: 3,
        spells_known: 16,
        type: [4, 4, 3, 3, 2]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 18,
        type: [4, 4, 3, 3, 3, 1]
      },
      10: {
        features: ['Divine Intervention'],
        proficiency_bonus: 4,
        spells_known: 20,
        type: [5, 4, 3, 3, 3, 2]
      },
      11: {
        features: ['Destroy Undead (CR 2)'],
        proficiency_bonus: 4,
        spells_known: 21,
        type: [5, 4, 3, 3, 3, 2, 1]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 21,
        type: [5, 4, 3, 3, 3, 2, 1]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 22,
        type: [5, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        features: ['Destroy Undead (CR 3)'],
        proficiency_bonus: 5,
        spells_known: 22,
        type: [5, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 23,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 23,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        features: ['Destroy Undead (CR 4)', 'Divine Domain feature'],
        proficiency_bonus: 6,
        spells_known: 24,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        features: ['Channel Divinity (3/rest)'],
        proficiency_bonus: 6,
        spells_known: 24,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 25,
        type: [5, 4, 3, 3, 3, 2, 2, 1, 1, 1]
      },
      20: {
        features: ['Divine Intervention Improvement'],
        proficiency_bonus: 6,
        spells_known: 26,
        type: [5, 4, 3, 3, 3, 2, 2, 2, 1, 1]
      }
    },
    spellcasting: {
      0: ['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],
      1: ['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
      2: ['Animal Messenger', 'Blindness/Deafness', 'Calm Emotions', 'Detect Thoughts', 'Enhance Ability', 'Enthrall', 'Heat Metal', 'Hold Person', 'Invisibility', 'Knock', 'Lesser Restoration', 'Locate Animals or Plants', 'Locate Object', 'Magic Mouth', 'See Invisbility', 'Shatter', 'Silence', 'Suggestion', 'Zone of Truth'],
      3: ['Animate Dead', 'Beacon of Hope', 'Bestow Curse', 'Clairvoyance', 'Create Food and Water', 'Daylight', 'Dispel Magic', 'Glyph of Warding', 'Magic Circle', 'Mass Healing Word', 'Meld into Stone', 'Protection from Energy', 'Remove Curse', 'Revivify', 'Sending', 'Speak with Dead', 'Spirit Guardians', 'Tongues', 'Water Walk'],
      4: ['Banishment', 'Control Water', 'Death Ward', 'Divination', 'Freedom of Movement', 'Guardian of Faith', 'Locate Creature', 'Stone Shape'],
      5: ['Commune', 'Contagion', 'Dispel Evil and Good', 'Flame Strike', 'Geas', 'Greater Restoration', 'Hallow', 'Insect Plague', 'Legend Lore', 'Mass Cure Wounds', 'Planar Binding', 'Raise Dead', 'Scrying'],
      6: ['Blade Barrier', 'Create Undead', 'Find the Path', 'Forbiddance', 'Harm', 'Heal', 'Heroes’ Feast', 'Planar Ally', 'True Seeing', 'Word of Recall'],
      7: ['Conjure Celestial', 'Divine Word', 'Etherealness', 'Fire Storm', 'Plane Shift', 'Regenerate', 'Resurrection', 'Symbol'],
      8: ['Antimagic Field', 'Control Weather', 'Earthquake', 'Holy Aura'],
      9: ['Astral Projection', 'Gate', 'Mass Heal', 'True Resurrection'],
    },
    weapons: [
      { name: 'Simple' }
    ]
  },
  {
    name: 'Druid',
    hit_die: 8,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Shield' }
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Animal Handling' },
          { name: 'Arcana' },
          { name: 'Insight' },
          { name: 'Medicine' },
          { name: 'Nature' },
          { name: 'Perception' },
          { name: 'Religion' },
          { name: 'Survival' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Intelligence' },
      { name: 'Wisdom' }
    ],
    starting_equipment: { class: 'Druid' },
    sub_classes: [
      {
        name: 'Circle of the Land',
        description: 'The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Druidic', 'Spellcasting: Druid'],
        proficiency_bonus: 2,
        spells_known: 4,
        type: [2, 2]
      },
      2: {
        features: ['Wild Shape', 'Duidic Circle'],
        proficiency_bonus: 2,
        spells_known: 5,
        type: [2, 3]
      },
      3: {
        features: [],
        proficiency_bonus: 2,
        spells_known: 8,
        type: [2, 4, 2]
      },
      4: {
        features: ['Wild Shape Improvement', ' Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 10,
        type: [3, 4, 3]
      },
      5: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 12,
        type: [3, 4, 3, 2]
      },
      6: {
        features: ['Druid Circle Feature'],
        proficiency_bonus: 3,
        spells_known: 13,
        type: [3, 4, 3, 3]
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 14,
        type: [3, 4, 3, 3, 1]
      },
      8: {
        features: ['Wild Shape Improvement', 'Ability Score Improvement'],
        proficiency_bonus: 3,
        spells_known: 15,
        type: [3, 4, 3, 3, 2]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 17,
        type: [3, 4, 3, 3, 3, 1]
      },
      10: {
        features: ['Druid Circle Feature'],
        proficiency_bonus: 4,
        spells_known: 19,
        type: [4, 4, 3, 3, 3, 2]
      },
      11: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 20,
        type: [4, 4, 3, 3, 3, 2, 1]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 20,
        type: [4, 4, 3, 3, 3, 2, 1]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 21,
        type: [4, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        features: ['Druid Circle Feature'],
        proficiency_bonus: 5,
        spells_known: 21,
        type: [4, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 22,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 22,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        features: [],
        proficiency_bonus: 6,
        spells_known: 23,
        type: [4, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        features: ['Timeless Body', 'Beast Spells'],
        proficiency_bonus: 6,
        spells_known: 23,
        type: [4, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 24,
        type: [4, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        features: ['Archdruid'],
        proficiency_bonus: 6,
        spells_known: 25,
        type: [4, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    spellcasting: {
      0: ['Druidcraft', 'Guidance', 'Mending', 'Poison Spray', 'Produce Flame', 'Resistance', 'Shillelagh'],
      1: ['Animal Friendship', 'Charm Person', 'Create or Destroy Water', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Entangle', 'Faerie Fire', 'Fog Cloud', 'Goodberry', 'Healing Word', 'Jump', 'Longstrider', 'Purify Food and Drink', 'Speak with Animals', 'Thunderwave'],
      2: ['Animal Messenger', 'Barkskin', 'Darkvision', 'Enhance Ability', 'Find Traps', 'Flame Blade', 'Flaming Sphere', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Lesser Restoration', 'Locate Animals or Plants', 'Locate Object', 'Moonbeam', 'Pass without Trace', 'Protection from Poison', 'Spike Growth'],
      3: ['Call Lightning', 'Conjure Animals', 'Daylight', 'Dispel Magic', 'Meld into Stone', 'Plant Growth', 'Protection from Energy', 'Sleet Storm', 'Speak with Plants', 'Water Breathing', 'Water Walk', 'Wind Wall'],
      4: ['Blight', 'Confusion', 'Conjure Minor Elementals', 'Conjure Woodland Beings', 'Control Water', 'Dominate Beast', 'Freedom of Movement', 'Giant Insect', 'Hallucinatory Terrain', 'Ice Storm', 'Locate Creature', 'Polymorph', 'Stone Shape', 'Stoneskin', 'Wall of Fire'],
      5: ['Antilife Shell', 'Awaken', 'Commune with Nature', 'Conjure Elemental', 'Contagion', 'Geas', 'Greater Restoration', 'Insect Plague', 'Mass Cure Wounds', 'Planar Binding', 'Reincarnate', 'Scrying', 'Tree Stride', 'Wall of Stone'],
      6: ['Conjure Fey', 'Find the Path', 'Heal', 'Heroes’ Feast', 'Move Earth', 'Sunbeam', 'Transport via Plants', 'Wall of Thorns', 'Wind Walk'],
      7: ['Fire Storm', 'Mirage Arcane', 'Plane Shift', 'Regenerate', 'Reverse Gravity'],
      8: ['Animal Shapes', 'Antipathy/Sympathy', 'Control Weather', 'Earthquake', 'Feeblemind', 'Sunburst'],
      9: ['Foresight', 'Shapechange', 'Storm of Vengeance', 'True Resurrection'],
    },
    weapons: [
      { name: 'Clubs' },
      { name: 'Dagger' },
      { name: 'Javelin' },
      { name: 'Mace' },
      { name: 'Quarterstaff' },
      { name: 'Sickle' },
      { name: 'Spear' },
      { name: 'Dart' },
      { name: 'Sling' },
      { name: 'Scimitar' }
      // { name: 'Herbalism Kit' }
    ]
  },
  {
    name: 'Fighter',
    hit_die: 10,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Heavy' },
      { name: 'Shield' }
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Acrobatics' },
          { name: 'Animal Handling' },
          { name: 'Athletics' },
          { name: 'History' },
          { name: 'Insight' },
          { name: 'Intimidation' },
          { name: 'Perception' },
          { name: 'Survival' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Fighter' },
    sub_classes: [
      {
        name: 'Champion',
        description: 'The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Fighting Style', 'Second Wind'],
        proficiency_bonus: 2
      },
      2: {
        features: ['Action Surge (one use)'],
        proficiency_bonus: 2
      },
      3: {
        features: ['Martial Archetype'],
        proficiency_bonus: 2
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2
      },
      5: {
        features: ['Extra Attack'],
        proficiency_bonus: 3
      },
      6: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3
      },
      7: {
        features: ['Martial Archetype feature'],
        proficiency_bonus: 3
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3
      },
      9: {
        features: ['Indomitable (one use)'],
        proficiency_bonus: 4
      },
      10: {
        features: ['Martial Archetype feature'],
        proficiency_bonus: 4
      },
      11: {
        features: ['Extra Attack (2)'],
        proficiency_bonus: 4
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4
      },
      13: {
        features: ['Indomitable (two uses)'],
        proficiency_bonus: 5
      },
      14: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5
      },
      15: {
        features: ['Martial Archetype feature'],
        proficiency_bonus: 5
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5
      },
      17: {
        features: ['Action Surge (two uses)', 'Indomitable (three uses)'],
        proficiency_bonus: 6
      },
      18: {
        features: ['Martial Archetype feature'],
        proficiency_bonus: 6
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6
      },
      20: {
        features: ['Extra Attack (3)'],
        proficiency_bonus: 6
      }
    },
    spellcasting: {},
    weapons: [
      { name: 'Simple' },
      { name: 'Martial' }
    ]
  },
  {
    // Beginning at 1st level, while you are wearing no armor 
    // and not wielding a shield, your 
    // AC equals 10 + Dexterity modifier + Wisdom modifier
    name: 'Monk',
    hit_die: 8,
    armor: [],
    proficiency_choices: [
      // Choose 1 Artisan Kit or Musical Instrument
      {
        choose: 1,
        type: 'Kit',
        from: [
          { name: 'Alchemist\'s Supplies' },
          { name: 'Brewer\'s Supplies' },
          { name: 'Calligrapher\'s Supplies' },
          { name: "Carpenter\'s tools" },
          { name: "Cartographer\'s tools" },
          { name: "Cobbler\'s tools" },
          { name: "Cook\'s utensils" },
          { name: "Glassblower\'s tools" },
          { name: "Jeweler\'s tools" },
          { name: "Leatherworker\'s tools" },
          { name: "Mason\'s tools" },
          { name: "Painter\'s Supplies" },
          { name: "Potter\'s tools" },
          { name: "Smith\'s tools" },
          { name: "Tinker\'s tools" },
          { name: "Weaver\'s tools" },
          { name: "Woodcarver\'s tools" },
          { name: "Disguise kit" },
          { name: "Forgery kit" }
        ]
      }, {
        choose: 1,
        type: 'Instruments',
        from: [
          { name: 'Bagpipes' },
          { name: 'Drum' },
          { name: 'Dulcimer' },
          { name: 'Flute' },
          { name: 'Lute' },
          { name: 'Lyre' },
          { name: 'Horn' },
          { name: 'Pan flute' },
          { name: 'Shawm' },
          { name: 'Viol' }
        ]
      }, {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Acrobatics' },
          { name: 'Athletics' },
          { name: 'History' },
          { name: 'Insight' },
          { name: 'Religion' },
          { name: 'Stealth' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Dexterity' }
    ],
    starting_equipment: { class: 'Monk' },
    sub_classes: [
      {
        name: 'Way of the Open Hand',
        description: 'Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Unarmored Defense', 'Martial Arts'],
        proficiency_bonus: 2,
        martial_arts: '1d4',
        ki_points: 0,
        unarmored_movement: ''
      },
      2: {
        features: ['Ki', 'Unarmored Movement'],
        proficiency_bonus: 2,
        martial_arts: '1d4',
        ki_points: 2,
        unarmored_movement: '+10 ft.'
      },
      3: {
        features: ['Monastic Tradition', 'Deflect Missiles'],
        proficiency_bonus: 2,
        martial_arts: '1d4',
        ki_points: 3,
        unarmored_movement: '+10 ft.'
      },
      4: {
        features: ['Ability Score Improvement', 'Slow Fall'],
        proficiency_bonus: 2,
        martial_arts: '1d4',
        ki_points: 4,
        unarmored_movement: '+10 ft.'
      },
      5: {
        features: ['Extra Attack', 'Stunning Strike'],
        proficiency_bonus: 3,
        martial_arts: '1d6',
        ki_points: 5,
        unarmored_movement: '+10 ft.'
      },
      6: {
        features: ['Ki-Empowered Strikes', 'Monastic Tradition feature'],
        proficiency_bonus: 3,
        martial_arts: '1d6',
        ki_points: 6,
        unarmored_movement: '+15 ft.'
      },
      7: {
        features: ['Evasion', 'Stillness of Mind'],
        proficiency_bonus: 3,
        martial_arts: '1d6',
        ki_points: 7,
        unarmored_movement: '+15 ft.'
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        martial_arts: '1d6',
        ki_points: 8,
        unarmored_movement: '+15 ft.'
      },
      9: {
        features: ['Unarmored Movement improvement'],
        proficiency_bonus: 4,
        martial_arts: '1d6',
        ki_points: 9,
        unarmored_movement: '+15 ft.'
      },
      10: {
        features: ['Purity of Body'],
        proficiency_bonus: 4,
        martial_arts: '1d6',
        ki_points: 10,
        unarmored_movement: '+20 ft.'
      },
      11: {
        features: ['Monastic Tradion feature'],
        proficiency_bonus: 4,
        martial_arts: '1d8',
        ki_points: 11,
        unarmored_movement: '+20 ft.'
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        martial_arts: '1d8',
        ki_points: 12,
        unarmored_movement: '+20 ft.'
      },
      13: {
        features: ['Tongue of the Sun and Moon'],
        proficiency_bonus: 5,
        martial_arts: '1d8',
        ki_points: 13,
        unarmored_movement: '+20 ft.'
      },
      14: {
        features: ['Diamond Soul'],
        proficiency_bonus: 5,
        martial_arts: '1d8',
        ki_points: 14,
        unarmored_movement: '+25 ft.'
      },
      15: {
        features: ['Timeless Body'],
        proficiency_bonus: 5,
        martial_arts: '1d8',
        ki_points: 15,
        unarmored_movement: '+25 ft.'
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        martial_arts: '1d8',
        ki_points: 16,
        unarmored_movement: '+25 ft.'
      },
      17: {
        features: ['Monastic Tradition feature'],
        proficiency_bonus: 6,
        martial_arts: '1d10',
        ki_points: 17,
        unarmored_movement: '+25 ft.'
      },
      18: {
        features: ['Empty Body'],
        proficiency_bonus: 6,
        martial_arts: '1d10',
        ki_points: 18,
        unarmored_movement: '+30 ft.'
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        martial_arts: '1d10',
        ki_points: 19,
        unarmored_movement: '+30 ft.'
      },
      20: {
        features: ['Perfect Self'],
        proficiency_bonus: 6,
        martial_arts: '1d10',
        ki_points: 20,
        unarmored_movement: '+30 ft.'
      }
    },
    spellcasting: {},
    weapons: [
      { name: 'Simple' },
      { name: 'Shortsword' }
    ]
  },
  {
    name: 'Paladin',
    hit_die: 10,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Heavy' },
      { name: 'Shield' }
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Athletics' },
          { name: 'Insight' },
          { name: 'Intimidation' },
          { name: 'Medicine' },
          { name: 'Persuasion' },
          { name: 'Religion' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Wisdom' },
      { name: 'Charisma' }
    ],
    starting_equipment: { class: 'Paladin' },
    sub_classes: [
      {
        name: 'Oath of Devotion',
        description: 'The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods\' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Divine Sense', 'Lay on Hands'],
        proficiency_bonus: 2,
        spells_known: 0,
        type: []
      },
      2: {
        features: ['Fighting Style', 'Spellcasting: Paladin', 'Divine Smite'],
        proficiency_bonus: 2,
        spells_known: 2,
        type: [0, 2]
      },
      3: {
        features: ['Divine Health', 'Saacred Oath'],
        proficiency_bonus: 2,
        spells_known: 3,
        type: [0, 3]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 3,
        type: [0, 3]
      },
      5: {
        features: ['Extra Attack'],
        proficiency_bonus: 3,
        spells_known: 6,
        type: [0, 4, 2]
      },
      6: {
        features: ['Aura of Protection'],
        proficiency_bonus: 3,
        spells_known: 6,
        type: [0, 4, 2]
      },
      7: {
        features: ['Sacred Oath feature'],
        proficiency_bonus: 3,
        spells_known: 7,
        type: [0, 4, 3]
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        spells_known: 7,
        type: [0, 4, 3]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 7,
        type: [4, 3]
      },
      10: {
        features: ['Aura of Courage'],
        proficiency_bonus: 4,
        spells_known: 9,
        type: [0, 4, 3, 2]
      },
      11: {
        features: ['Improved Divine SMite'],
        proficiency_bonus: 4,
        spells_known: 10,
        type: [0, 4, 3, 3]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 10,
        type: [0, 4, 3, 3]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 11,
        type: [0, 4, 3, 3, 1]
      },
      14: {
        features: ['Cleansing Touch'],
        proficiency_bonus: 5,
        spells_known: 11,
        type: [0, 4, 3, 3, 1]
      },
      15: {
        features: ['Sacred Oath feature'],
        proficiency_bonus: 5,
        spells_known: 12,
        type: [0, 4, 3, 3, 2]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 12,
        type: [0, 4, 3, 3, 2]
      },
      17: {
        features: [],
        proficiency_bonus: 6,
        spells_known: 14,
        type: [0, 4, 3, 3, 3, 1]
      },
      18: {
        features: ['Aura Improvments'],
        proficiency_bonus: 6,
        spells_known: 14,
        type: [0, 4, 3, 3, 3, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 15,
        type: [0, 4, 3, 3, 3, 2]
      },
      20: {
        features: ['Sacred Oath feature'],
        proficiency_bonus: 6,
        spells_known: 15,
        type: [0, 4, 3, 3, 3, 2]
      }
    },
    spellcasting: {
      0: [],
      1: ['Bless', 'Command', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Divine Favor', 'Heroism', 'Protection from Evil and Good', 'Purify Food and Drink', 'Shield of Faith'],
      2: ['Aid', 'Branding Smite', 'Find Steed', 'Lesser Restoration', 'Locate Object', 'Magic Weapon', 'Protection from Poison', 'Zone of Truth'],
      3: ['Create Food and Water', 'Daylight', 'Dispel Magic', 'Magic Circle', 'Remove Curse', 'Revivify'],
      4: ['Banishment', 'Death Ward', 'Locate Creature'],
      5: ['Dispel Evil and Good', 'Geas', 'Raise Dead'],
      6: [],
      7: [],
      9: [],
    },
    weapons: [
      { name: 'Simple' },
      { name: 'Martial' }
    ]
  }, {
    name: 'Ranger',
    hit_die: 10,
    armor: [
      { name: 'Light' },
      { name: 'Medium' },
      { name: 'Shield' }
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: 'Animal Handling' },
          { name: 'Athletics' },
          { name: 'Insight' },
          { name: 'Investigation' },
          { name: 'Nature' },
          { name: 'Perception' },
          { name: 'Stealth' },
          { name: 'Survival' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Dexterity' }
    ],
    starting_equipment: { class: 'Ranger' },
    sub_classes: [
      {
        name: 'Hunter',
        description: 'Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter\'s path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Favored Enemy', 'Natural Explorer'],
        proficiency_bonus: 2,
        spells_known: 0,
        type: []
      },
      2: {
        features: ['Fighting Style', 'Spellcasting: Ranger'],
        proficiency_bonus: 2,
        spells_known: 2,
        type: [0, 2]
      },
      3: {
        features: ['Ranger Archetype', 'Primeval Awareness'],
        proficiency_bonus: 2,
        spells_known: 3,
        type: [0, 3]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 3,
        type: [0, 3]
      },
      5: {
        features: ['Extra Attack'],
        proficiency_bonus: 3,
        spells_known: 4,
        type: [0, 4, 2]
      },
      6: {
        features: ['Favored Enemy and Natural Explorer Improvements'],
        proficiency_bonus: 3,
        spells_known: 4,
        type: [0, 4, 2]
      },
      7: {
        features: ['Ranger Archetype feature'],
        proficiency_bonus: 3,
        spells_known: 5,
        type: [0, 4, 3]
      },
      8: {
        features: ['Ability Score Improvement', 'Land\'s Stride'],
        proficiency_bonus: 3,
        spells_known: 5,
        type: [0, 4, 3]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 6,
        type: [0, 4, 3, 2]
      },
      10: {
        features: ['Natural Explorer Improvement', 'Hide in Plain Sight'],
        proficiency_bonus: 4,
        spells_known: 6,
        type: [0, 4, 3, 2]
      },
      11: {
        features: ['Ranger Archetype feature'],
        proficiency_bonus: 4,
        spells_known: 7,
        type: [0, 4, 3, 3]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 7,
        type: [0, 4, 3, 3]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 8,
        type: [0, 4, 3, 3, 1]
      },
      14: {
        features: ['Favored Enemy Improvement', 'Vanish'],
        proficiency_bonus: 5,
        spells_known: 8,
        type: [0, 4, 3, 3, 1]
      },
      15: {
        features: ['Ranger Archetype feature'],
        proficiency_bonus: 5,
        spells_known: 9,
        type: [0, 4, 3, 3, 2]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 9,
        type: [0, 4, 3, 3, 2]
      },
      17: {
        features: [],
        proficiency_bonus: 6,
        spells_known: 10,
        type: [0, 4, 3, 3, 3, 1]
      },
      18: {
        features: ['Feral Senses'],
        proficiency_bonus: 6,
        spells_known: 10,
        type: [0, 4, 3, 3, 3, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 11,
        type: [0, 4, 3, 3, 3, 2]
      },
      20: {
        features: ['Foe Slayer'],
        proficiency_bonus: 6,
        spells_known: 11,
        type: [0, 4, 3, 3, 3, 2]
      }
    },
    spellcasting: {
      0: [],
      1: ['Alarm', 'Animal Friendship', 'Cure Wounds', 'Detect Magic', 'Detect Poison and Disease', 'Fog Cloud', 'Goodberry', 'Hunter\'s Mark', 'Jump', 'Longstrider', 'Speak with Animals'],
      2: ['Animal Messenger', 'Barkskin', 'Darkvision', 'Enhance Ability', 'Find Traps', 'Flame Blade', 'Flaming Sphere', 'Gust of Wind', 'Heat Metal', 'Hold Person', 'Lesser Restoration', 'Locate Animals or Plants', 'Locate Object', 'Moonbeam', 'Pass without Trace', 'Protection from Poison', 'Spike Growth'],
      3: ['Conjure Animals', 'Daylight', 'Nondetection', 'Plant Growth', 'Protection from Energy', 'Speak with Plants', 'Water Breathing', 'Water Walk', 'Wind Wall'],
      4: ['Conjure Woodland Beings', 'Freedom of Movement', 'Locate Creature', 'Stoneskin'],
      5: ['Commune with Nature', 'Tree Stride'],
      6: [],
      7: [],
      8: [],
      9: [],
    },
    weapons: [
      { name: 'Simple' },
      { name: 'Martial' }
    ]
  }, {
    name: 'Rogue',
    hit_die: 8,
    armor: [{ name: 'Light' }],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: "Acrobatics" },
          { name: "Athletics" },
          { name: "Deception" },
          { name: "Insight" },
          { name: "Intimidation" },
          { name: "Investigation" },
          { name: "Perception" },
          { name: "Performance" },
          { name: "Persuasion" },
          { name: "Sleight of Hand" },
          { name: "Stealth" }
        ]
      }
    ],
    saving_throws: [
      { name: 'Dexterity' },
      { name: 'Intelligence' }
    ],
    starting_equipment: { class: 'Rogue' },
    sub_classes: [
      {
        name: 'Thief',
        description: 'You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn\'t employ.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Expertise', 'Sneak Attack', 'Thieves\' Cant'],
        proficiency_bonus: 2,
        sneak_attack: '1d6'
      },
      2: {
        features: ['Cunning Action'],
        proficiency_bonus: 2,
        sneak_attack: '1d6'
      },
      3: {
        features: ['Roguish Archetype'],
        proficiency_bonus: 2,
        sneak_attack: '2d6'
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        sneak_attack: '2d6'
      },
      5: {
        features: ['Uncanny Dodge'],
        proficiency_bonus: 3,
        sneak_attack: '3d6'
      },
      6: {
        features: ['Expertise'],
        proficiency_bonus: 3,
        sneak_attack: '3d6'
      },
      7: {
        features: ['Evasion'],
        proficiency_bonus: 3,
        sneak_attack: '4d6'
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        sneak_attack: '4d6'
      },
      9: {
        features: ['Roguish Archetype feature'],
        proficiency_bonus: 4,
        sneak_attack: '5d6'
      },
      10: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        sneak_attack: '5d6'
      },
      11: {
        features: ['Reliable Talent'],
        proficiency_bonus: 4,
        sneak_attack: '6d6'
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        sneak_attack: '6d6'
      },
      13: {
        features: ['Roguish Archetype feature'],
        proficiency_bonus: 5,
        sneak_attack: '7d6'
      },
      14: {
        features: ['Blindsense'],
        proficiency_bonus: 5,
        sneak_attack: '7d6'
      },
      15: {
        features: ['Slippery Mind'],
        proficiency_bonus: 5,
        sneak_attack: '8d6'
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        sneak_attack: '8d6'
      },
      17: {
        features: ['Roguish Archetype feature'],
        proficiency_bonus: 6,
        sneak_attack: '9d6'
      },
      18: {
        features: ['Elusive'],
        proficiency_bonus: 6,
        sneak_attack: '9d6'
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        sneak_attack: '10d6'
      },
      20: {
        features: ['Stroke of Luck'],
        proficiency_bonus: 6,
        sneak_attack: '10d6'
      }
    },
    spellcasting: {},
    weapons: [
      { name: 'Simple' },
      { name: 'Longsword' },
      { name: 'Rapier' },
      { name: 'Shortsword' },
      { name: 'Crossbows, hand' }
      // { name: 'Thieves\ Tools' }
    ]
  }, {
    name: 'Sorcerer',
    hit_die: 6,
    armor: [{ name: 'Light' }],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: "Arcana" },
          { name: "Deception" },
          { name: "Insight" },
          { name: "Intimidation" },
          { name: "Persuasion" },
          { name: "Religion" }
        ]
      }
    ],
    saving_throws: [
      { name: 'Constitution' },
      { name: 'Charisma' }
    ],
    starting_equipment: { class: 'Sorcerer' },
    sub_classes: [
      {
        name: 'Draconic Bloodline',
        description: 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Spellcasting: Sorcer', 'Sorcerous Origin'],
        proficiency_bonus: 2,
        sorcery_points: 0,
        spells_known: 2,
        type: [4, 2]
      },
      2: {
        features: ['Font of Magic'],
        proficiency_bonus: 2,
        sorcery_points: 2,
        spells_known: 3,
        type: [4, 3]
      },
      3: {
        features: ['Metamagic'],
        proficiency_bonus: 2,
        sorcery_points: 3,
        spells_known: 4,
        type: [4, 4, 2]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        sorcery_points: 4,
        spells_known: 5,
        type: [5, 4, 3]
      },
      5: {
        features: [],
        proficiency_bonus: 3,
        sorcery_points: 5,
        spells_known: 6,
        type: [5, 4, 3, 2]
      },
      6: {
        features: ['Sorcerous Origin feature'],
        proficiency_bonus: 3,
        sorcery_points: 6,
        spells_known: 7,
        type: [5, 4, 3, 3]
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        sorcery_points: 7,
        spells_known: 8,
        type: [5, 4, 3, 3, 1]
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        sorcery_points: 8,
        spells_known: 9,
        type: [5, 4, 3, 3, 2]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        sorcery_points: 9,
        spells_known: 10,
        type: [5, 4, 3, 3, 3, 1]
      },
      10: {
        features: ['Metamagic'],
        proficiency_bonus: 4,
        sorcery_points: 10,
        spells_known: 11,
        type: [6, 4, 3, 3, 3, 2]
      },
      11: {
        features: [],
        proficiency_bonus: 4,
        sorcery_points: 11,
        spells_known: 12,
        type: [6, 4, 3, 3, 3, 2, 1]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        sorcery_points: 12,
        spells_known: 12,
        type: [6, 4, 3, 3, 3, 2, 1]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        sorcery_points: 13,
        spells_known: 13,
        type: [6, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        features: ['Sorcerous Origin feature'],
        proficiency_bonus: 5,
        sorcery_points: 14,
        spells_known: 13,
        type: [6, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        features: [],
        proficiency_bonus: 5,
        sorcery_points: 15,
        spells_known: 14,
        type: [6, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        sorcery_points: 16,
        spells_known: 14,
        type: [6, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        features: ['Metamagic'],
        proficiency_bonus: 6,
        sorcery_points: 18,
        spells_known: 15,
        type: [6, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        features: ['Sourcerous Origin feature'],
        proficiency_bonus: 6,
        sorcery_points: 18,
        spells_known: 15,
        type: [6, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        sorcery_points: 19,
        spells_known: 15,
        type: [6, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        features: ['Sorcerous Restoration'],
        proficiency_bonus: 6,
        sorcery_points: 20,
        spells_known: 15,
        type: [6, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    spellcasting: {
      0: ['Acid Splash', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike'],
      1: ['Burning Hands', 'Charm Person', 'Color Spray', 'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Fog Cloud', 'Jump', 'Mage Armor', 'Magic Missile', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave'],
      2: ['Alter Self', 'Blindness/Deafness', 'Blur', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Enhance Ability', 'Enlarge/Reduce', 'Gust of Wind', 'Hold Person', 'Invisibility', 'Knock', 'Levitate', 'Mirror Image', 'Misty Step', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Spider Climb', 'Suggestion', 'Web'],
      3: ['Blink', 'Clairvoyance', 'Counterspell', 'Daylight', 'Dispel Magic', 'Fear', 'Fireball', 'Fly', 'Gaseous Form', 'Haste', 'Hypnotic Pattern', 'Lightning Bolt', 'Major Image', 'Protection from Energy', 'Sleet Storm', 'Slow', 'Stinking Cloud', 'Tongues', 'Water Breathing', 'Water Walk'],
      4: ['Banishment', 'Blight', 'Confusion', 'Dimension Door', 'Dominate Beast', 'Greater Invisibility', 'Ice Storm', 'Polymorph', 'Stoneskin', 'Wall of Fire'],
      5: ['Animate Objects', 'Cloudkill', 'Cone of Cold', 'Creation', 'Dominate Person', 'Hold Monster', 'Insect Plague', 'Seeming', 'Telekinesis', 'Teleportation Circle', 'Wall of Stone'],
      6: ['Chain Lightning', 'Circle of Death', 'Disintegrate', 'Eyebite', 'Globe of Invulnerability', 'Mass Suggestion', 'Move Earth', 'Sunbeam', 'True Seeing'],
      7: ['Delayed Blast Fireball', 'Etherealness', 'Finger of Death', 'Fire Storm', 'Plane Shift', 'Prismatic Spray', 'Reverse Gravity', 'Teleport'],
      8: ['Dominate Monster', 'Earthquake', 'Incendiary Cloud', 'Power Word Stun', 'Sunburst'],
      9: ['Gate', 'Meteor Swarm', 'Power Word Kill', 'Time Stop', 'Wish'],
    },
    weapons: [
      { name: 'Dagger' },
      { name: 'Quarterstaff' },
      { name: 'Dart' },
      { name: 'Sling' },
    ]
  }, {
    name: 'Warlock',
    hit_die: 8,
    armor: [{ name: 'Light' }],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: "Arcana" },
          { name: "Deception" },
          { name: "History" },
          { name: "Intimidation" },
          { name: "Investigation" },
          { name: "Nature" },
          { name: 'Religion' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Wisdom' },
      { name: 'Charisma' }
    ],
    starting_equipment: { class: 'Warlock' },
    sub_classes: [
      {
        name: 'The Fiend',
        description: 'You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz\'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Otherworldly Patron', 'Pact Magic'],
        proficiency_bonus: 2,
        cantrips: 2,
        spells_known: 2,
        spell_slots: 1,
        slot_level: 1,
        type: [2, 1],
        invocations_known: 0
      },
      2: {
        features: ['Eldritch Invocations'],
        proficiency_bonus: 2,
        cantrips: 2,
        spells_known: 3,
        spell_slots: 2,
        slot_level: 1,
        type: [2, 2],
        invocations_known: 2
      },
      3: {
        features: ['Pact Boon'],
        proficiency_bonus: 2,
        cantrips: 2,
        spells_known: 5,
        spell_slots: 2,
        slot_level: 2,
        type: [2, 2, 2],
        invocations_known: 2
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        cantrips: 3,
        spells_known: 5,
        spell_slots: 2,
        slot_level: 2,
        invocations_known: 2
      },
      5: {
        features: [],
        proficiency_bonus: 3,
        cantrips: 3,
        spells_known: 6,
        spell_slots: 2,
        slot_level: 3,
        invocations_known: 3
      },
      6: {
        features: ['Otherwordly Patron feature'],
        proficiency_bonus: 3,
        cantrips: 3,
        spells_known: 7,
        spell_slots: 2,
        slot_level: 3,
        invocations_known: 3
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        cantrips: 3,
        spells_known: 8,
        spell_slots: 2,
        slot_level: 4,
        invocations_known: 4
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        cantrips: 3,
        spells_known: 9,
        spell_slots: 2,
        slot_level: 4,
        invocations_known: 4
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        cantrips: 3,
        spells_known: 10,
        spell_slots: 2,
        slot_level: 5,
        invocations_known: 5
      },
      10: {
        features: ['Otherwordly Patron feature'],
        proficiency_bonus: 4,
        cantrips: 4,
        spells_known: 10,
        spell_slots: 2,
        slot_level: 5,
        invocations_known: 5
      },
      11: {
        features: ['Mystic Arcanum (6th level)'],
        proficiency_bonus: 4,
        cantrips: 4,
        spells_known: 11,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 5
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        cantrips: 4,
        spells_known: 11,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 6
      },
      13: {
        features: ['Mystic Arcanum (7th level)'],
        proficiency_bonus: 5,
        cantrips: 4,
        spells_known: 12,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 6
      },
      14: {
        features: ['Otherwordly Patron feature'],
        proficiency_bonus: 5,
        cantrips: 4,
        spells_known: 12,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 6
      },
      15: {
        features: ['Mystic Acanum (8th level)'],
        proficiency_bonus: 5,
        cantrips: 4,
        spells_known: 13,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 7
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        cantrips: 4,
        spells_known: 13,
        spell_slots: 3,
        slot_level: 5,
        invocations_known: 7
      },
      17: {
        features: ['Mystic Acanum (9th level)'],
        proficiency_bonus: 6,
        cantrips: 4,
        spells_known: 14,
        spell_slots: 4,
        slot_level: 5,
        invocations_known: 7
      },
      18: {
        features: [],
        proficiency_bonus: 6,
        cantrips: 4,
        spells_known: 14,
        spell_slots: 4,
        slot_level: 5,
        invocations_known: 8
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        cantrips: 4,
        spells_known: 15,
        spell_slots: 4,
        slot_level: 5,
        invocations_known: 8
      },
      20: {
        features: ['Eldritch Master'],
        proficiency_bonus: 6,
        cantrips: 4,
        spells_known: 15,
        spell_slots: 4,
        slot_level: 5,
        invocations_known: 8
      }
    },
    spellcasting: {
      0: ['Chill Touch', 'Eldritch Blast', 'Mage Hand', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'True Strike'],
      1: ['Charm Person', 'Comprehend Languages', 'Expeditious Retreat', 'Hellish Rebuke', 'Illusory Script', 'Protection from Evil and Good', 'Unseen Servant'],
      2: ['Darkness', 'Enthrall', 'Hold Person', 'Invisibility', 'Mirror Image', 'Misty Step', 'Ray of Enfeeblement', 'Shatter', 'Spider Climb', 'Suggestion'],
      3: ['Counterspell', 'Dispel Magic', 'Fear', 'Fly', 'Gaseous Form', 'Hypnotic Pattern', 'Magic Circle', 'Major Image', 'Remove Curse', 'Tongues', 'Vampiric Touch'],
      4: ['Banishment', 'Blight', 'Dimension Door', 'Hallucinatory Terrain'],
      5: ['Contact Other Plane', 'Dream', 'Hold Monster', 'Scrying'],
      6: ['Circle of Death', 'Conjure Fey', 'Create Undead', 'Eyebite', 'Flesh to Stone', 'Mass Suggestion', 'True Seeing'],
      7: ['Etherealness', 'Finger of Death', 'Forcecage', 'Plane Shift'],
      8: ['Demiplane', 'Dominate Monster', 'Feeblemind', 'Glibness', 'Power Word Stun'],
      9: ['Astral Projection', 'Foresight', 'Imprisonment', 'Power Word Kill', 'True Polymorph'],
    },
    weapons: [{ name: 'Simple' }]
  }, {
    name: 'Wizard',
    hit_die: 6,
    armor: [{ name: 'Light' }],
    proficiency_choices: [
      {
        choose: 2,
        type: 'Skill',
        from: [
          { name: "Arcana" },
          { name: "History" },
          { name: "Insight" },
          { name: "Investigation" },
          { name: "Medicine" },
          { name: 'Religion' }
        ]
      }
    ],
    saving_throws: [
      { name: 'Intelligence' },
      { name: 'Wisdom' }
    ],
    starting_equipment: { class: 'Wizard' },
    sub_classes: [
      {
        name: 'School of Evocation',
        description: 'You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.',
        proficiencies: 'tba'
      }
    ],
    levels: {
      1: {
        features: ['Spellcasting: Wizard', 'Arcane Recovery'],
        proficiency_bonus: 2,
        spells_known: 5,
        type: [3, 2]
      },
      2: {
        features: ['Arcane Tradition'],
        proficiency_bonus: 2,
        spells_known: 6,
        type: [3, 3]
      },
      3: {
        features: [],
        proficiency_bonus: 2,
        spells_known: 9,
        type: [3, 4, 2]
      },
      4: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 2,
        spells_known: 11,
        type: [4, 4, 3]
      },
      5: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 13,
        type: [4, 4, 3, 2]
      },
      6: {
        features: ['Arcane Tradition feature'],
        proficiency_bonus: 3,
        spells_known: 14,
        type: [4, 4, 3, 3]
      },
      7: {
        features: [],
        proficiency_bonus: 3,
        spells_known: 15,
        type: [4, 4, 3, 3, 1]
      },
      8: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 3,
        spells_known: 16,
        type: [4, 4, 3, 3, 2]
      },
      9: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 18,
        type: [4, 4, 3, 3, 3, 1]
      },
      10: {
        features: ['Arcane Tradition feature'],
        proficiency_bonus: 4,
        spells_known: 20,
        type: [5, 4, 3, 3, 3, 2]
      },
      11: {
        features: [],
        proficiency_bonus: 4,
        spells_known: 21,
        type: [5, 4, 3, 3, 3, 2, 1]
      },
      12: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 4,
        spells_known: 21,
        type: [5, 4, 3, 3, 3, 2, 1]
      },
      13: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 22,
        type: [5, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        features: ['Arcane Tradition feature'],
        proficiency_bonus: 5,
        spells_known:22,
        type: [5, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        features: [],
        proficiency_bonus: 5,
        spells_known: 23,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 5,
        spells_known: 23,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        features: [],
        proficiency_bonus: 6,
        spells_known: 24,
        type: [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        features: ['Spell Mastery'],
        proficiency_bonus: 6,
        spells_known: 25,
        type: [5, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        features: ['Ability Score Improvement'],
        proficiency_bonus: 6,
        spells_known: 26,
        type: [5, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        features: ['Signature Spell'],
        proficiency_bonus: 6,
        spells_known: 27,
        type: [5, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    spellcasting: {
      0: ['Acid Splash', 'Chill Touch', 'Dancing Lights', 'Fire Bolt', 'Light', 'Mage Hand', 'Mending', 'Message', 'Minor Illusion', 'Poison Spray', 'Prestidigitation', 'Ray of Frost', 'Shocking Grasp', 'True Strike'],
      1: ['Alarm', 'Burning Hands', 'Charm Person', 'Color Spray', 'Comprehend Languages', 'Detect Magic', 'Disguise Self', 'Expeditious Retreat', 'False Life', 'Feather Fall', 'Find Familiar', 'Floating Disk', 'Fog Cloud', 'Grease', 'Hideous Laughter', 'Identify', 'Illusory Script', 'Jump', 'Longstrider', 'Mage Armor', 'Magic Missile', 'Protection from Evil and Good', 'Shield', 'Silent Image', 'Sleep', 'Thunderwave', 'Unseen Servant'],
      2: ['Acid Arrow', 'Alter Self', 'Arcane Lock', 'Arcanist’s Magic Aura', 'Blindness/Deafness', 'Blur', 'Continual Flame', 'Darkness', 'Darkvision', 'Detect Thoughts', 'Enlarge/Reduce', 'Flaming Sphere', 'Gentle Repose', 'Gust of Wind', 'Hold Person', 'Invisibility', 'Knock', 'Levitate', 'Locate Object', 'Magic Mouth', 'Magic Weapon', 'Mirror Image', 'Misty Step', 'Ray of Enfeeblement', 'Rope Trick', 'Scorching Ray', 'See Invisibility', 'Shatter', 'Spider Climb', 'Suggestion', 'Web'],
      3: ['Animate Dead', 'Bestow Curse', 'Blink', 'Clairvoyance', 'Counterspell', 'Dispel Magic', 'Fear', 'Fireball', 'Fly', 'Gaseous Form', 'Glyph of Warding', 'Haste', 'Hypnotic Pattern', 'Lightning Bolt', 'Magic Circle', 'Major Image', 'Nondetection', 'Phantom Steed', 'Protection from Energy', 'Remove Curse', 'Sending', 'Sleet Storm', 'Slow', 'Stinking Cloud', 'Tiny Hut', 'Tongues', 'Vampiric Touch', 'Water Breathing'],
      4: ['Arcane Eye', 'Banishment', 'Black Tentacles', 'Blight', 'Confusion', 'Conjure Minor Elementals', 'Control Water', 'Dimension Door', 'Fabricate', 'Faithful Hound', 'Fire Shield', 'Greater Invisibility', 'Hallucinatory Terrain', 'Ice Storm', 'Locate Creature', 'Phantasmal Killer', 'Polymorph', 'Private Sanctum', 'Resilient Sphere', 'Secret Chest', 'Stone Shape', 'Stoneskin', 'Wall of Fire'],
      5: ['Animate Objects', 'Arcane Hand', 'Cloudkill', 'Cone of Cold', 'Conjure Elemental', 'Contact Other Plane', 'Creation', 'Dominate Person', 'Dream', 'Geas', 'Hold Monster', 'Legend Lore', 'Mislead', 'Modify Memory', 'Passwall', 'Planar Binding', 'Scrying', 'Seeming', 'Telekinesis', 'Telepathic Bond', 'Teleportation Circle', 'Wall of Force', 'Wall of Stone'],
      6: ['Chain Lightning', 'Circle of Death', 'Contingency', 'Create Undead', 'Disintegrate', 'Eyebite', 'Flesh to Stone', 'Freezing Sphere', 'Globe of Invulnerability', 'Guards and Wards', 'Instant Summons', 'Irresistible Dance', 'Magic Jar', 'Mass Suggestion', 'Move Earth', 'Programmed Illusion', 'Sunbeam', 'True Seeing', 'Wall of Ice'],
      7: ['Arcane Sword', 'Delayed Blast Fireball', 'Etherealness', 'Finger of Death', 'Forcecage', 'Magnificent Mansion', 'Mirage Arcane', 'Plane Shift', 'Prismatic Spray', 'Project Image', 'Reverse Gravity', 'Sequester', 'Simulacrum', 'Symbol', 'Teleport'],
      8: ['Antimagic Field', 'Antipathy/Sympathy', 'Clone', 'Control Weather', 'Demiplane', 'Dominate Monster', 'Feeblemind', 'Incendiary Cloud', 'Maze', 'Mind Blank', 'Power Word Stun', 'Sunburst'],
      9: ['Astral Projection', 'Foresight', 'Gate', 'Imprisonment', 'Meteor Swarm', 'Power Word Kill', 'Prismatic Wall', 'Shapechange', 'Time Stop', 'True Polymorph', 'Weird', 'Wish'],
    },
    weapons: [
      { name: 'Dagger' },
      { name: 'Quarterstaff' },
      { name: 'Dart' },
      { name: 'Sling' }
    ]
  }
]

module.exports = { classDB }