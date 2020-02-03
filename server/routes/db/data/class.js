
module.exports = [
  {
    "name": 'Barbarian',
    "hitDie": 12,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Animal Handling' },
          { "name": 'Athletics' },
          { "name": 'Intimidation' },
          { "name": 'Nature' },
          { "name": 'Perception' },
          { "name": 'Survival' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Strength' },
      { "name": 'Constitution' }
    ],
    "startingEquipment": { "class": 'Barbarian' },
    "levels": {
      1: {
        "features": ['Rage', 'Unarmored Defense'],
        "proficiencyBonus": 2,
        "rages": '2',
        "rageDamage": 2
      },
      2: {
        "features": ['Reckless Attack', 'Danger Sense'],
        "proficiencyBonus": 2,
        "rages": '2',
        "rageDamage": 2
      },
      3: {
        "features": ['Primal Path'],
        "proficiencyBonus": 2,
        "rages": '3',
        "rageDamage": 2
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "rages": '3',
        "rageDamage": 2
      },
      5: {
        "features": ['Extra Attack', 'Fast Movement'],
        "proficiencyBonus": 3,
        "rages": '3',
        "rageDamage": 2
      },
      6: {
        "features": ['Path Feature'],
        "proficiencyBonus": 3,
        "rages": '4',
        "rageDamage": 2
      },
      7: {
        "features": ['Feral Instinct'],
        "proficiencyBonus": 3,
        "rages": '4',
        "rageDamage": 2
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "rages": '4',
        "rageDamage": 2
      },
      9: {
        "features": ['Brutal Critical (1 dice)'],
        "proficiencyBonus": 4,
        "rages": '4',
        "rageDamage": 3
      },
      10: {
        "features": ['Path Feature'],
        "proficiencyBonus": 4,
        "rages": '4',
        "rageDamage": 3
      },
      11: {
        "features": ['Relentless Rage'],
        "proficiencyBonus": 4,
        "rages": '4',
        "rageDamage": 3
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "rages": '5',
        "rageDamage": 3
      },
      13: {
        "features": ['Brutal Critical (2 dice)'],
        "proficiencyBonus": 5,
        "rages": '5',
        "rageDamage": 3
      },
      14: {
        "features": ['Path Feature'],
        "proficiencyBonus": 5,
        "rages": '5',
        "rageDamage": 3
      },
      15: {
        "features": ['Persistent Rage'],
        "proficiencyBonus": 5,
        "rages": '5',
        "rageDamage": 3
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "rages": '5',
        "rageDamage": 4
      },
      17: {
        "features": ['Brutal Critical (3 dice)'],
        "proficiencyBonus": 6,
        "rages": '6',
        "rageDamage": 4
      },
      18: {
        "features": ['Indomitable Might'],
        "proficiencyBonus": 6,
        "rages": '6',
        "rageDamage": 4
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "rages": '6',
        "rageDamage": 4
      },
      20: {
        "features": ['Primal Champion'],
        "proficiencyBonus": 6,
        "rages": 'unlimited',
        "rageDamage": 4
      },
    },
    "spellcasting": {},
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Martial' }
    ]
  },
  {
    "name": 'Bard',
    "hitDie": 8,
    "armor": [
      { "name": 'Light' }
    ],
    "proficiencyChoices": [
      {
        "choose": 3,
        "type": 'Skill',
        "from": [
          { "name": 'Acrobatics' },
          { "name": 'Animal Handling' },
          { "name": 'Arcana' },
          { "name": 'Athletics' },
          { "name": 'Deception' },
          { "name": 'History' },
          { "name": 'Insight' },
          { "name": 'Intimidation' },
          { "name": 'Investigation' },
          { "name": 'Medicine' },
          { "name": 'Nature' },
          { "name": 'Perception' },
          { "name": 'Performance' },
          { "name": 'Persuasion' },
          { "name": 'Religion' },
          { "name": 'Sleight of Hand' },
          { "name": 'Stealth' },
          { "name": 'Survival' }
        ]
      }, {
        "choose": 3,
        "type": 'Instruments',
        "from": [
          { "name": 'Bagpipes' },
          { "name": 'Drum' },
          { "name": 'Dulcimer' },
          { "name": 'Flute' },
          { "name": 'Lute' },
          { "name": 'Lyre' },
          { "name": 'Horn' },
          { "name": 'Pan flute' },
          { "name": 'Shawm' },
          { "name": 'Viol' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Dexterity' },
      { "name": 'Charisma' }
    ],
    "startingEquipment": { "class": 'Bard' },
    "subClasses": [
      {
        "name": 'College of Lore',
        "description": 'Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king. The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic. The college\'s members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Spellcasting: Bard', 'Bardic Inspiration(d6)'],
        "proficiencyBonus": 2,
        "spellsKnown": 4,
        "type": [2, 2]
      },
      2: {
        "features": ['Jack of All Trades', 'Song of Rest(d6)'],
        "proficiencyBonus": 2,
        "spellsKnown": 5,
        "type": [2, 3]
      },
      3: {
        "features": ['Bard College', 'Expertise'],
        "proficiencyBonus": 2,
        "spellsKnown": 6,
        "type": [2, 4, 2]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 7,
        "type": [3, 4, 3]
      },
      5: {
        "features": ['Bardic Inspiration(d8)', 'Font of Inspiration'],
        "proficiencyBonus": 3,
        "spellsKnown": 8,
        "type": [2, 4, 3, 2]
      },
      6: {
        "features": ['Countercharm', 'Bard College feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 9,
        "type": [3, 4, 3, 3]
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 10,
        "type": [3, 4, 3, 3, 1]
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "spellsKnown": 11,
        "type": [3, 4, 3, 3, 2]
      },
      9: {
        "features": ['Song of Rest(d8)'],
        "proficiencyBonus": 4,
        "spellsKnown": 12,
        "type": [3, 4, 3, 3, 3, 1]
      },
      10: {
        "features": ['Bardic Inspiration(d10)', 'Expertise', 'Magical Secrets'],
        "proficiencyBonus": 4,
        "spellsKnown": 14,
        "type": [4, 4, 3, 3, 3, 2]
      },
      11: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 15,
        "type": [4, 4, 3, 3, 3, 2, 1]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 15,
        "type": [4, 4, 3, 3, 3, 2, 1]
      },
      13: {
        "features": ['Song of Rest(d10)'],
        "proficiencyBonus": 5,
        "spellsKnown": 16,
        "type": [4, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        "features": ['Magical Secrets', 'Bard College feature'],
        "proficiencyBonus": 5,
        "spellsKnown": 18,
        "type": [4, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        "features": ['Bardic Inspiration(d12)'],
        "proficiencyBonus": 5,
        "spellsKnown": 19,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 19,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 19,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        "features": ['Song of Rest (d12)'],
        "proficiencyBonus": 6,
        "spellsKnown": 20,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        "features": ['Magical Secrets'],
        "proficiencyBonus": 6,
        "spellsKnown": 22,
        "type": [4, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 22,
        "type": [4, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        "features": ['Superior Inspiration'],
        "proficiencyBonus": 6,
        "spellsKnown": 22,
        "type": [4, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      },
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Longsword' },
      { "name": 'Rapier' },
      { "name": 'Shortsword' },
      { "name": 'Crossbows, hand' }
    ]
  },
  {
    "name": 'Cleric',
    "hitDie": 8,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'History' },
          { "name": 'Insight' },
          { "name": 'Medicine' },
          { "name": 'Persuasion' },
          { "name": 'Religion' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Wisdom' },
      { "name": 'Charisma' }
    ],
    "startingEquipment": { "class": 'Cleric' },
    "subClasses": [
      {
        "name": 'College of Lore',
        "description": 'The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Spellcasting: Cleric', 'Divine Domain'],
        "proficiencyBonus": 2,
        "spellsKnown": 5,
        "type": [3, 2]
      },
      2: {
        "features": ['Channel Divinity (1/rest)', 'Divine Domain feature'],
        "proficiencyBonus": 2,
        "spellsKnown": 6,
        "type": [3, 3]
      },
      3: {
        "features": [],
        "proficiencyBonus": 2,
        "spellsKnown": 9,
        "type": [3, 4, 2]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 11,
        "type": [4, 4, 3]
      },
      5: {
        "features": ['Destroy Undead (CR 1/2)'],
        "proficiencyBonus": 3,
        "spellsKnown": 13,
        "type": [4, 4, 3, 2]
      },
      6: {
        "features": ['Channel Divinity (2/rest)', 'Divine Domain feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 14,
        "type": [4, 4, 3, 3]
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 15,
        "type": [4, 4, 3, 3, 1]
      },
      8: {
        "features": ['Ability Score Improvement',  'Destroy Undead (CR 1)', 'Divine Domain feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 16,
        "type": [4, 4, 3, 3, 2]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 18,
        "type": [4, 4, 3, 3, 3, 1]
      },
      10: {
        "features": ['Divine Intervention'],
        "proficiencyBonus": 4,
        "spellsKnown": 20,
        "type": [5, 4, 3, 3, 3, 2]
      },
      11: {
        "features": ['Destroy Undead (CR 2)'],
        "proficiencyBonus": 4,
        "spellsKnown": 21,
        "type": [5, 4, 3, 3, 3, 2, 1]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 21,
        "type": [5, 4, 3, 3, 3, 2, 1]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 22,
        "type": [5, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        "features": ['Destroy Undead (CR 3)'],
        "proficiencyBonus": 5,
        "spellsKnown": 22,
        "type": [5, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 23,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 23,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        "features": ['Destroy Undead (CR 4)', 'Divine Domain feature'],
        "proficiencyBonus": 6,
        "spellsKnown": 24,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        "features": ['Channel Divinity (3/rest)'],
        "proficiencyBonus": 6,
        "spellsKnown": 24,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 25,
        "type": [5, 4, 3, 3, 3, 2, 2, 1, 1, 1]
      },
      20: {
        "features": ['Divine Intervention Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 26,
        "type": [5, 4, 3, 3, 3, 2, 2, 2, 1, 1]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Simple' }
    ]
  },
  {
    "name": 'Druid',
    "hitDie": 8,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Animal Handling' },
          { "name": 'Arcana' },
          { "name": 'Insight' },
          { "name": 'Medicine' },
          { "name": 'Nature' },
          { "name": 'Perception' },
          { "name": 'Religion' },
          { "name": 'Survival' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Intelligence' },
      { "name": 'Wisdom' }
    ],
    "startingEquipment": { "class": 'Druid' },
    "subClasses": [
      {
        "name": 'Circle of the Land',
        "description": 'The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Druidic', 'Spellcasting: Druid'],
        "proficiencyBonus": 2,
        "spellsKnown": 4,
        "type": [2, 2]
      },
      2: {
        "features": ['Wild Shape', 'Duidic Circle'],
        "proficiencyBonus": 2,
        "spellsKnown": 5,
        "type": [2, 3]
      },
      3: {
        "features": [],
        "proficiencyBonus": 2,
        "spellsKnown": 8,
        "type": [2, 4, 2]
      },
      4: {
        "features": ['Wild Shape Improvement', ' Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 10,
        "type": [3, 4, 3]
      },
      5: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 12,
        "type": [3, 4, 3, 2]
      },
      6: {
        "features": ['Druid Circle Feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 13,
        "type": [3, 4, 3, 3]
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 14,
        "type": [3, 4, 3, 3, 1]
      },
      8: {
        "features": ['Wild Shape Improvement', 'Ability Score Improvement'],
        "proficiencyBonus": 3,
        "spellsKnown": 15,
        "type": [3, 4, 3, 3, 2]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 17,
        "type": [3, 4, 3, 3, 3, 1]
      },
      10: {
        "features": ['Druid Circle Feature'],
        "proficiencyBonus": 4,
        "spellsKnown": 19,
        "type": [4, 4, 3, 3, 3, 2]
      },
      11: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 20,
        "type": [4, 4, 3, 3, 3, 2, 1]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 20,
        "type": [4, 4, 3, 3, 3, 2, 1]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 21,
        "type": [4, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        "features": ['Druid Circle Feature'],
        "proficiencyBonus": 5,
        "spellsKnown": 21,
        "type": [4, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 22,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 22,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        "features": [],
        "proficiencyBonus": 6,
        "spellsKnown": 23,
        "type": [4, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        "features": ['Timeless Body', 'Beast Spells'],
        "proficiencyBonus": 6,
        "spellsKnown": 23,
        "type": [4, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 24,
        "type": [4, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        "features": ['Archdruid'],
        "proficiencyBonus": 6,
        "spellsKnown": 25,
        "type": [4, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Clubs' },
      { "name": 'Dagger' },
      { "name": 'Javelin' },
      { "name": 'Mace' },
      { "name": 'Quarterstaff' },
      { "name": 'Sickle' },
      { "name": 'Spear' },
      { "name": 'Dart' },
      { "name": 'Sling' },
      { "name": 'Scimitar' }
      // { "name": 'Herbalism Kit' }
    ]
  },
  {
    "name": 'Fighter',
    "hitDie": 10,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Heavy' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Acrobatics' },
          { "name": 'Animal Handling' },
          { "name": 'Athletics' },
          { "name": 'History' },
          { "name": 'Insight' },
          { "name": 'Intimidation' },
          { "name": 'Perception' },
          { "name": 'Survival' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Strength' },
      { "name": 'Constitution' }
    ],
    "startingEquipment": { "class": 'Fighter' },
    "subClasses": [
      {
        "name": 'Champion',
        "description": 'The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Fighting Style', 'Second Wind'],
        "proficiencyBonus": 2
      },
      2: {
        "features": ['Action Surge (one use)'],
        "proficiencyBonus": 2
      },
      3: {
        "features": ['Martial Archetype'],
        "proficiencyBonus": 2
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2
      },
      5: {
        "features": ['Extra Attack'],
        "proficiencyBonus": 3
      },
      6: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3
      },
      7: {
        "features": ['Martial Archetype feature'],
        "proficiencyBonus": 3
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3
      },
      9: {
        "features": ['Indomitable (one use)'],
        "proficiencyBonus": 4
      },
      10: {
        "features": ['Martial Archetype feature'],
        "proficiencyBonus": 4
      },
      11: {
        "features": ['Extra Attack (2)'],
        "proficiencyBonus": 4
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4
      },
      13: {
        "features": ['Indomitable (two uses)'],
        "proficiencyBonus": 5
      },
      14: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5
      },
      15: {
        "features": ['Martial Archetype feature'],
        "proficiencyBonus": 5
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5
      },
      17: {
        "features": ['Action Surge (two uses)', 'Indomitable (three uses)'],
        "proficiencyBonus": 6
      },
      18: {
        "features": ['Martial Archetype feature'],
        "proficiencyBonus": 6
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6
      },
      20: {
        "features": ['Extra Attack (3)'],
        "proficiencyBonus": 6
      }
    },
    "spellcasting": {},
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Martial' }
    ]
  },
  {
    // Beginning at 1st level, while you are wearing no armor
    // and not wielding a shield, your
    // AC equals 10 + Dexterity modifier + Wisdom modifier
    "name": 'Monk',
    "hitDie": 8,
    "armor": [],
    "proficiencyChoices": [
      // Choose 1 Artisan Kit or Musical Instrument
      {
        "choose": 1,
        "type": 'Kit',
        "from": [
          { "name": 'Alchemist\'s Supplies' },
          { "name": 'Brewer\'s Supplies' },
          { "name": 'Calligrapher\'s Supplies' },
          { "name": "Carpenter\'s tools" },
          { "name": "Cartographer\'s tools" },
          { "name": "Cobbler\'s tools" },
          { "name": "Cook\'s utensils" },
          { "name": "Glassblower\'s tools" },
          { "name": "Jeweler\'s tools" },
          { "name": "Leatherworker\'s tools" },
          { "name": "Mason\'s tools" },
          { "name": "Painter\'s Supplies" },
          { "name": "Potter\'s tools" },
          { "name": "Smith\'s tools" },
          { "name": "Tinker\'s tools" },
          { "name": "Weaver\'s tools" },
          { "name": "Woodcarver\'s tools" },
          { "name": "Disguise kit" },
          { "name": "Forgery kit" }
        ]
      }, {
        "choose": 1,
        "type": 'Instruments',
        "from": [
          { "name": 'Bagpipes' },
          { "name": 'Drum' },
          { "name": 'Dulcimer' },
          { "name": 'Flute' },
          { "name": 'Lute' },
          { "name": 'Lyre' },
          { "name": 'Horn' },
          { "name": 'Pan flute' },
          { "name": 'Shawm' },
          { "name": 'Viol' }
        ]
      }, {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Acrobatics' },
          { "name": 'Athletics' },
          { "name": 'History' },
          { "name": 'Insight' },
          { "name": 'Religion' },
          { "name": 'Stealth' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Strength' },
      { "name": 'Dexterity' }
    ],
    "startingEquipment": { "class": 'Monk' },
    "subClasses": [
      {
        "name": 'Way of the Open Hand',
        "description": 'Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Unarmored Defense', 'Martial Arts'],
        "proficiencyBonus": 2,
        "martialArts": '1d4',
        "kiPoints": 0,
        "unarmoredMovement": ''
      },
      2: {
        "features": ['Ki', 'Unarmored Movement'],
        "proficiencyBonus": 2,
        "martialArts": '1d4',
        "kiPoints": 2,
        "unarmoredMovement": '+10 ft.'
      },
      3: {
        "features": ['Monastic Tradition', 'Deflect Missiles'],
        "proficiencyBonus": 2,
        "martialArts": '1d4',
        "kiPoints": 3,
        "unarmoredMovement": '+10 ft.'
      },
      4: {
        "features": ['Ability Score Improvement', 'Slow Fall'],
        "proficiencyBonus": 2,
        "martialArts": '1d4',
        "kiPoints": 4,
        "unarmoredMovement": '+10 ft.'
      },
      5: {
        "features": ['Extra Attack', 'Stunning Strike'],
        "proficiencyBonus": 3,
        "martialArts": '1d6',
        "kiPoints": 5,
        "unarmoredMovement": '+10 ft.'
      },
      6: {
        "features": ['Ki-Empowered Strikes', 'Monastic Tradition feature'],
        "proficiencyBonus": 3,
        "martialArts": '1d6',
        "kiPoints": 6,
        "unarmoredMovement": '+15 ft.'
      },
      7: {
        "features": ['Evasion', 'Stillness of Mind'],
        "proficiencyBonus": 3,
        "martialArts": '1d6',
        "kiPoints": 7,
        "unarmoredMovement": '+15 ft.'
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "martialArts": '1d6',
        "kiPoints": 8,
        "unarmoredMovement": '+15 ft.'
      },
      9: {
        "features": ['Unarmored Movement improvement'],
        "proficiencyBonus": 4,
        "martialArts": '1d6',
        "kiPoints": 9,
        "unarmoredMovement": '+15 ft.'
      },
      10: {
        "features": ['Purity of Body'],
        "proficiencyBonus": 4,
        "martialArts": '1d6',
        "kiPoints": 10,
        "unarmoredMovement": '+20 ft.'
      },
      11: {
        "features": ['Monastic Tradion feature'],
        "proficiencyBonus": 4,
        "martialArts": '1d8',
        "kiPoints": 11,
        "unarmoredMovement": '+20 ft.'
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "martialArts": '1d8',
        "kiPoints": 12,
        "unarmoredMovement": '+20 ft.'
      },
      13: {
        "features": ['Tongue of the Sun and Moon'],
        "proficiencyBonus": 5,
        "martialArts": '1d8',
        "kiPoints": 13,
        "unarmoredMovement": '+20 ft.'
      },
      14: {
        "features": ['Diamond Soul'],
        "proficiencyBonus": 5,
        "martialArts": '1d8',
        "kiPoints": 14,
        "unarmoredMovement": '+25 ft.'
      },
      15: {
        "features": ['Timeless Body'],
        "proficiencyBonus": 5,
        "martialArts": '1d8',
        "kiPoints": 15,
        "unarmoredMovement": '+25 ft.'
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "martialArts": '1d8',
        "kiPoints": 16,
        "unarmoredMovement": '+25 ft.'
      },
      17: {
        "features": ['Monastic Tradition feature'],
        "proficiencyBonus": 6,
        "martialArts": '1d10',
        "kiPoints": 17,
        "unarmoredMovement": '+25 ft.'
      },
      18: {
        "features": ['Empty Body'],
        "proficiencyBonus": 6,
        "martialArts": '1d10',
        "kiPoints": 18,
        "unarmoredMovement": '+30 ft.'
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "martialArts": '1d10',
        "kiPoints": 19,
        "unarmoredMovement": '+30 ft.'
      },
      20: {
        "features": ['Perfect Self'],
        "proficiencyBonus": 6,
        "martialArts": '1d10',
        "kiPoints": 20,
        "unarmoredMovement": '+30 ft.'
      }
    },
    "spellcasting": {},
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Shortsword' }
    ]
  },
  {
    "name": 'Paladin',
    "hitDie": 10,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Heavy' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Athletics' },
          { "name": 'Insight' },
          { "name": 'Intimidation' },
          { "name": 'Medicine' },
          { "name": 'Persuasion' },
          { "name": 'Religion' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Wisdom' },
      { "name": 'Charisma' }
    ],
    "startingEquipment": { "class": 'Paladin' },
    "subClasses": [
      {
        "name": 'Oath of Devotion',
        "description": 'The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods\' tenets as the measure of their devotion. They hold angels--the perfect servants of good--as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Divine Sense', 'Lay on Hands'],
        "proficiencyBonus": 2,
        "spellsKnown": 0,
        "type": []
      },
      2: {
        "features": ['Fighting Style', 'Spellcasting: Paladin', 'Divine Smite'],
        "proficiencyBonus": 2,
        "spellsKnown": 2,
        "type": [0, 2]
      },
      3: {
        "features": ['Divine Health', 'Saacred Oath'],
        "proficiencyBonus": 2,
        "spellsKnown": 3,
        "type": [0, 3]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 3,
        "type": [0, 3]
      },
      5: {
        "features": ['Extra Attack'],
        "proficiencyBonus": 3,
        "spellsKnown": 6,
        "type": [0, 4, 2]
      },
      6: {
        "features": ['Aura of Protection'],
        "proficiencyBonus": 3,
        "spellsKnown": 6,
        "type": [0, 4, 2]
      },
      7: {
        "features": ['Sacred Oath feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 7,
        "type": [0, 4, 3]
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "spellsKnown": 7,
        "type": [0, 4, 3]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 7,
        "type": [4, 3]
      },
      10: {
        "features": ['Aura of Courage'],
        "proficiencyBonus": 4,
        "spellsKnown": 9,
        "type": [0, 4, 3, 2]
      },
      11: {
        "features": ['Improved Divine SMite'],
        "proficiencyBonus": 4,
        "spellsKnown": 10,
        "type": [0, 4, 3, 3]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 10,
        "type": [0, 4, 3, 3]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 11,
        "type": [0, 4, 3, 3, 1]
      },
      14: {
        "features": ['Cleansing Touch'],
        "proficiencyBonus": 5,
        "spellsKnown": 11,
        "type": [0, 4, 3, 3, 1]
      },
      15: {
        "features": ['Sacred Oath feature'],
        "proficiencyBonus": 5,
        "spellsKnown": 12,
        "type": [0, 4, 3, 3, 2]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 12,
        "type": [0, 4, 3, 3, 2]
      },
      17: {
        "features": [],
        "proficiencyBonus": 6,
        "spellsKnown": 14,
        "type": [0, 4, 3, 3, 3, 1]
      },
      18: {
        "features": ['Aura Improvments'],
        "proficiencyBonus": 6,
        "spellsKnown": 14,
        "type": [0, 4, 3, 3, 3, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 15,
        "type": [0, 4, 3, 3, 3, 2]
      },
      20: {
        "features": ['Sacred Oath feature'],
        "proficiencyBonus": 6,
        "spellsKnown": 15,
        "type": [0, 4, 3, 3, 3, 2]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Martial' }
    ]
  }, {
    "name": 'Ranger',
    "hitDie": 10,
    "armor": [
      { "name": 'Light' },
      { "name": 'Medium' },
      { "name": 'Shield' }
    ],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": 'Animal Handling' },
          { "name": 'Athletics' },
          { "name": 'Insight' },
          { "name": 'Investigation' },
          { "name": 'Nature' },
          { "name": 'Perception' },
          { "name": 'Stealth' },
          { "name": 'Survival' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Strength' },
      { "name": 'Dexterity' }
    ],
    "startingEquipment": { "class": 'Ranger' },
    "subClasses": [
      {
        "name": 'Hunter',
        "description": 'Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter\'s path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Favored Enemy', 'Natural Explorer'],
        "proficiencyBonus": 2,
        "spellsKnown": 0,
        "type": []
      },
      2: {
        "features": ['Fighting Style', 'Spellcasting: Ranger'],
        "proficiencyBonus": 2,
        "spellsKnown": 2,
        "type": [0, 2]
      },
      3: {
        "features": ['Ranger Archetype', 'Primeval Awareness'],
        "proficiencyBonus": 2,
        "spellsKnown": 3,
        "type": [0, 3]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 3,
        "type": [0, 3]
      },
      5: {
        "features": ['Extra Attack'],
        "proficiencyBonus": 3,
        "spellsKnown": 4,
        "type": [0, 4, 2]
      },
      6: {
        "features": ['Favored Enemy and Natural Explorer Improvements'],
        "proficiencyBonus": 3,
        "spellsKnown": 4,
        "type": [0, 4, 2]
      },
      7: {
        "features": ['Ranger Archetype feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 5,
        "type": [0, 4, 3]
      },
      8: {
        "features": ['Ability Score Improvement', 'Land\'s Stride'],
        "proficiencyBonus": 3,
        "spellsKnown": 5,
        "type": [0, 4, 3]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 6,
        "type": [0, 4, 3, 2]
      },
      10: {
        "features": ['Natural Explorer Improvement', 'Hide in Plain Sight'],
        "proficiencyBonus": 4,
        "spellsKnown": 6,
        "type": [0, 4, 3, 2]
      },
      11: {
        "features": ['Ranger Archetype feature'],
        "proficiencyBonus": 4,
        "spellsKnown": 7,
        "type": [0, 4, 3, 3]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 7,
        "type": [0, 4, 3, 3]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 8,
        "type": [0, 4, 3, 3, 1]
      },
      14: {
        "features": ['Favored Enemy Improvement', 'Vanish'],
        "proficiencyBonus": 5,
        "spellsKnown": 8,
        "type": [0, 4, 3, 3, 1]
      },
      15: {
        "features": ['Ranger Archetype feature'],
        "proficiencyBonus": 5,
        "spellsKnown": 9,
        "type": [0, 4, 3, 3, 2]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 9,
        "type": [0, 4, 3, 3, 2]
      },
      17: {
        "features": [],
        "proficiencyBonus": 6,
        "spellsKnown": 10,
        "type": [0, 4, 3, 3, 3, 1]
      },
      18: {
        "features": ['Feral Senses'],
        "proficiencyBonus": 6,
        "spellsKnown": 10,
        "type": [0, 4, 3, 3, 3, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 11,
        "type": [0, 4, 3, 3, 3, 2]
      },
      20: {
        "features": ['Foe Slayer'],
        "proficiencyBonus": 6,
        "spellsKnown": 11,
        "type": [0, 4, 3, 3, 3, 2]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Martial' }
    ]
  }, {
    "name": 'Rogue',
    "hitDie": 8,
    "armor": [{ "name": 'Light' }],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": "Acrobatics" },
          { "name": "Athletics" },
          { "name": "Deception" },
          { "name": "Insight" },
          { "name": "Intimidation" },
          { "name": "Investigation" },
          { "name": "Perception" },
          { "name": "Performance" },
          { "name": "Persuasion" },
          { "name": "Sleight of Hand" },
          { "name": "Stealth" }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Dexterity' },
      { "name": 'Intelligence' }
    ],
    "startingEquipment": { "class": 'Rogue' },
    "subClasses": [
      {
        "name": 'Thief',
        "description": 'You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn\'t employ.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Expertise', 'Sneak Attack', 'Thieves\' Cant'],
        "proficiencyBonus": 2,
        "sneakAttack": '1d6'
      },
      2: {
        "features": ['Cunning Action'],
        "proficiencyBonus": 2,
        "sneakAttack": '1d6'
      },
      3: {
        "features": ['Roguish Archetype'],
        "proficiencyBonus": 2,
        "sneakAttack": '2d6'
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "sneakAttack": '2d6'
      },
      5: {
        "features": ['Uncanny Dodge'],
        "proficiencyBonus": 3,
        "sneakAttack": '3d6'
      },
      6: {
        "features": ['Expertise'],
        "proficiencyBonus": 3,
        "sneakAttack": '3d6'
      },
      7: {
        "features": ['Evasion'],
        "proficiencyBonus": 3,
        "sneakAttack": '4d6'
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "sneakAttack": '4d6'
      },
      9: {
        "features": ['Roguish Archetype feature'],
        "proficiencyBonus": 4,
        "sneakAttack": '5d6'
      },
      10: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "sneakAttack": '5d6'
      },
      11: {
        "features": ['Reliable Talent'],
        "proficiencyBonus": 4,
        "sneakAttack": '6d6'
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "sneakAttack": '6d6'
      },
      13: {
        "features": ['Roguish Archetype feature'],
        "proficiencyBonus": 5,
        "sneakAttack": '7d6'
      },
      14: {
        "features": ['Blindsense'],
        "proficiencyBonus": 5,
        "sneakAttack": '7d6'
      },
      15: {
        "features": ['Slippery Mind'],
        "proficiencyBonus": 5,
        "sneakAttack": '8d6'
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "sneakAttack": '8d6'
      },
      17: {
        "features": ['Roguish Archetype feature'],
        "proficiencyBonus": 6,
        "sneakAttack": '9d6'
      },
      18: {
        "features": ['Elusive'],
        "proficiencyBonus": 6,
        "sneakAttack": '9d6'
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "sneakAttack": '10d6'
      },
      20: {
        "features": ['Stroke of Luck'],
        "proficiencyBonus": 6,
        "sneakAttack": '10d6'
      }
    },
    "spellcasting": {},
    "weapons": [
      { "name": 'Simple' },
      { "name": 'Longsword' },
      { "name": 'Rapier' },
      { "name": 'Shortsword' },
      { "name": 'Crossbows, hand' }
      // { "name": 'Thieves\ Tools' }
    ]
  }, {
    "name": 'Sorcerer',
    "hitDie": 6,
    "armor": [{ "name": 'Light' }],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": "Arcana" },
          { "name": "Deception" },
          { "name": "Insight" },
          { "name": "Intimidation" },
          { "name": "Persuasion" },
          { "name": "Religion" }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Constitution' },
      { "name": 'Charisma' }
    ],
    "startingEquipment": { "class": 'Sorcerer' },
    "subClasses": [
      {
        "name": 'Draconic Bloodline',
        "description": 'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Spellcasting: Sorcer', 'Sorcerous Origin'],
        "proficiencyBonus": 2,
        "sorceryPoints": 0,
        "spellsKnown": 2,
        "type": [4, 2]
      },
      2: {
        "features": ['Font of Magic'],
        "proficiencyBonus": 2,
        "sorceryPoints": 2,
        "spellsKnown": 3,
        "type": [4, 3]
      },
      3: {
        "features": ['Metamagic'],
        "proficiencyBonus": 2,
        "sorceryPoints": 3,
        "spellsKnown": 4,
        "type": [4, 4, 2]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "sorceryPoints": 4,
        "spellsKnown": 5,
        "type": [5, 4, 3]
      },
      5: {
        "features": [],
        "proficiencyBonus": 3,
        "sorceryPoints": 5,
        "spellsKnown": 6,
        "type": [5, 4, 3, 2]
      },
      6: {
        "features": ['Sorcerous Origin feature'],
        "proficiencyBonus": 3,
        "sorceryPoints": 6,
        "spellsKnown": 7,
        "type": [5, 4, 3, 3]
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "sorceryPoints": 7,
        "spellsKnown": 8,
        "type": [5, 4, 3, 3, 1]
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "sorceryPoints": 8,
        "spellsKnown": 9,
        "type": [5, 4, 3, 3, 2]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "sorceryPoints": 9,
        "spellsKnown": 10,
        "type": [5, 4, 3, 3, 3, 1]
      },
      10: {
        "features": ['Metamagic'],
        "proficiencyBonus": 4,
        "sorceryPoints": 10,
        "spellsKnown": 11,
        "type": [6, 4, 3, 3, 3, 2]
      },
      11: {
        "features": [],
        "proficiencyBonus": 4,
        "sorceryPoints": 11,
        "spellsKnown": 12,
        "type": [6, 4, 3, 3, 3, 2, 1]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "sorceryPoints": 12,
        "spellsKnown": 12,
        "type": [6, 4, 3, 3, 3, 2, 1]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "sorceryPoints": 13,
        "spellsKnown": 13,
        "type": [6, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        "features": ['Sorcerous Origin feature'],
        "proficiencyBonus": 5,
        "sorceryPoints": 14,
        "spellsKnown": 13,
        "type": [6, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        "features": [],
        "proficiencyBonus": 5,
        "sorceryPoints": 15,
        "spellsKnown": 14,
        "type": [6, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "sorceryPoints": 16,
        "spellsKnown": 14,
        "type": [6, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        "features": ['Metamagic'],
        "proficiencyBonus": 6,
        "sorceryPoints": 18,
        "spellsKnown": 15,
        "type": [6, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        "features": ['Sourcerous Origin feature'],
        "proficiencyBonus": 6,
        "sorceryPoints": 18,
        "spellsKnown": 15,
        "type": [6, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "sorceryPoints": 19,
        "spellsKnown": 15,
        "type": [6, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        "features": ['Sorcerous Restoration'],
        "proficiencyBonus": 6,
        "sorceryPoints": 20,
        "spellsKnown": 15,
        "type": [6, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Dagger' },
      { "name": 'Quarterstaff' },
      { "name": 'Dart' },
      { "name": 'Sling' },
    ]
  }, {
    "name": 'Warlock',
    "hitDie": 8,
    "armor": [{ "name": 'Light' }],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": "Arcana" },
          { "name": "Deception" },
          { "name": "History" },
          { "name": "Intimidation" },
          { "name": "Investigation" },
          { "name": "Nature" },
          { "name": 'Religion' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Wisdom' },
      { "name": 'Charisma' }
    ],
    "startingEquipment": { "class": 'Warlock' },
    "subClasses": [
      {
        "name": 'The Fiend',
        "description": 'You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz\'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Otherworldly Patron', 'Pact Magic'],
        "proficiencyBonus": 2,
        "cantrips": 2,
        "spellsKnown": 2,
        "spellSlots": 1,
        "slotLevel": 1,
        "type": [2, 1],
        "invocationsKnown": 0
      },
      2: {
        "features": ['Eldritch Invocations'],
        "proficiencyBonus": 2,
        "cantrips": 2,
        "spellsKnown": 3,
        "spellSlots": 2,
        "slotLevel": 1,
        "type": [2, 2],
        "invocationsKnown": 2
      },
      3: {
        "features": ['Pact Boon'],
        "proficiencyBonus": 2,
        "cantrips": 2,
        "spellsKnown": 5,
        "spellSlots": 2,
        "slotLevel": 2,
        "type": [2, 2, 2],
        "invocationsKnown": 2
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "cantrips": 3,
        "spellsKnown": 5,
        "spellSlots": 2,
        "slotLevel": 2,
        "invocationsKnown": 2
      },
      5: {
        "features": [],
        "proficiencyBonus": 3,
        "cantrips": 3,
        "spellsKnown": 6,
        "spellSlots": 2,
        "slotLevel": 3,
        "invocationsKnown": 3
      },
      6: {
        "features": ['Otherwordly Patron feature'],
        "proficiencyBonus": 3,
        "cantrips": 3,
        "spellsKnown": 7,
        "spellSlots": 2,
        "slotLevel": 3,
        "invocationsKnown": 3
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "cantrips": 3,
        "spellsKnown": 8,
        "spellSlots": 2,
        "slotLevel": 4,
        "invocationsKnown": 4
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "cantrips": 3,
        "spellsKnown": 9,
        "spellSlots": 2,
        "slotLevel": 4,
        "invocationsKnown": 4
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "cantrips": 3,
        "spellsKnown": 10,
        "spellSlots": 2,
        "slotLevel": 5,
        "invocationsKnown": 5
      },
      10: {
        "features": ['Otherwordly Patron feature'],
        "proficiencyBonus": 4,
        "cantrips": 4,
        "spellsKnown": 10,
        "spellSlots": 2,
        "slotLevel": 5,
        "invocationsKnown": 5
      },
      11: {
        "features": ['Mystic Arcanum (6th level)'],
        "proficiencyBonus": 4,
        "cantrips": 4,
        "spellsKnown": 11,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 5
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "cantrips": 4,
        "spellsKnown": 11,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 6
      },
      13: {
        "features": ['Mystic Arcanum (7th level)'],
        "proficiencyBonus": 5,
        "cantrips": 4,
        "spellsKnown": 12,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 6
      },
      14: {
        "features": ['Otherwordly Patron feature'],
        "proficiencyBonus": 5,
        "cantrips": 4,
        "spellsKnown": 12,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 6
      },
      15: {
        "features": ['Mystic Acanum (8th level)'],
        "proficiencyBonus": 5,
        "cantrips": 4,
        "spellsKnown": 13,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 7
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "cantrips": 4,
        "spellsKnown": 13,
        "spellSlots": 3,
        "slotLevel": 5,
        "invocationsKnown": 7
      },
      17: {
        "features": ['Mystic Acanum (9th level)'],
        "proficiencyBonus": 6,
        "cantrips": 4,
        "spellsKnown": 14,
        "spellSlots": 4,
        "slotLevel": 5,
        "invocationsKnown": 7
      },
      18: {
        "features": [],
        "proficiencyBonus": 6,
        "cantrips": 4,
        "spellsKnown": 14,
        "spellSlots": 4,
        "slotLevel": 5,
        "invocationsKnown": 8
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "cantrips": 4,
        "spellsKnown": 15,
        "spellSlots": 4,
        "slotLevel": 5,
        "invocationsKnown": 8
      },
      20: {
        "features": ['Eldritch Master'],
        "proficiencyBonus": 6,
        "cantrips": 4,
        "spellsKnown": 15,
        "spellSlots": 4,
        "slotLevel": 5,
        "invocationsKnown": 8
      }
    },
    "spellcasting": {
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
    "weapons": [{ "name": 'Simple' }]
  }, {
    "name": 'Wizard',
    "hitDie": 6,
    "armor": [{ "name": 'Light' }],
    "proficiencyChoices": [
      {
        "choose": 2,
        "type": 'Skill',
        "from": [
          { "name": "Arcana" },
          { "name": "History" },
          { "name": "Insight" },
          { "name": "Investigation" },
          { "name": "Medicine" },
          { "name": 'Religion' }
        ]
      }
    ],
    "savingThrows": [
      { "name": 'Intelligence' },
      { "name": 'Wisdom' }
    ],
    "startingEquipment": { "class": 'Wizard' },
    "subClasses": [
      {
        "name": 'School of Evocation',
        "description": 'You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.',
        "proficiencies": 'tba'
      }
    ],
    "levels": {
      1: {
        "features": ['Spellcasting: Wizard', 'Arcane Recovery'],
        "proficiencyBonus": 2,
        "spellsKnown": 5,
        "type": [3, 2]
      },
      2: {
        "features": ['Arcane Tradition'],
        "proficiencyBonus": 2,
        "spellsKnown": 6,
        "type": [3, 3]
      },
      3: {
        "features": [],
        "proficiencyBonus": 2,
        "spellsKnown": 9,
        "type": [3, 4, 2]
      },
      4: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 2,
        "spellsKnown": 11,
        "type": [4, 4, 3]
      },
      5: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 13,
        "type": [4, 4, 3, 2]
      },
      6: {
        "features": ['Arcane Tradition feature'],
        "proficiencyBonus": 3,
        "spellsKnown": 14,
        "type": [4, 4, 3, 3]
      },
      7: {
        "features": [],
        "proficiencyBonus": 3,
        "spellsKnown": 15,
        "type": [4, 4, 3, 3, 1]
      },
      8: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 3,
        "spellsKnown": 16,
        "type": [4, 4, 3, 3, 2]
      },
      9: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 18,
        "type": [4, 4, 3, 3, 3, 1]
      },
      10: {
        "features": ['Arcane Tradition feature'],
        "proficiencyBonus": 4,
        "spellsKnown": 20,
        "type": [5, 4, 3, 3, 3, 2]
      },
      11: {
        "features": [],
        "proficiencyBonus": 4,
        "spellsKnown": 21,
        "type": [5, 4, 3, 3, 3, 2, 1]
      },
      12: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 4,
        "spellsKnown": 21,
        "type": [5, 4, 3, 3, 3, 2, 1]
      },
      13: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 22,
        "type": [5, 4, 3, 3, 3, 2, 1, 1]
      },
      14: {
        "features": ['Arcane Tradition feature'],
        "proficiencyBonus": 5,
        "spellsKnown":22,
        "type": [5, 4, 3, 3, 3, 2, 1, 1]
      },
      15: {
        "features": [],
        "proficiencyBonus": 5,
        "spellsKnown": 23,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      16: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 5,
        "spellsKnown": 23,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1]
      },
      17: {
        "features": [],
        "proficiencyBonus": 6,
        "spellsKnown": 24,
        "type": [5, 4, 3, 3, 3, 2, 1, 1, 1, 1]
      },
      18: {
        "features": ['Spell Mastery'],
        "proficiencyBonus": 6,
        "spellsKnown": 25,
        "type": [5, 4, 3, 3, 3, 3, 1, 1, 1, 1]
      },
      19: {
        "features": ['Ability Score Improvement'],
        "proficiencyBonus": 6,
        "spellsKnown": 26,
        "type": [5, 4, 3, 3, 3, 3, 2, 1, 1, 1]
      },
      20: {
        "features": ['Signature Spell'],
        "proficiencyBonus": 6,
        "spellsKnown": 27,
        "type": [5, 4, 3, 3, 3, 3, 2, 2, 1, 1]
      }
    },
    "spellcasting": {
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
    "weapons": [
      { "name": 'Dagger' },
      { "name": 'Quarterstaff' },
      { "name": 'Dart' },
      { "name": 'Sling' }
    ]
  }
]
