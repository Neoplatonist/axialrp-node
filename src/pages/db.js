/* eslint-disable no-useless-escape */
export const raceDB = [
  {
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
  }, {
    name: 'Elf',
    description: 'Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.',
    ability_bonus: [ 0, 2, 0, 0, 0, 0 ],
    age: {
      adult: 100,
      description: 'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
      max: 750 
    },
    alignment: {
      description: 'Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect othersâ€™ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.',
      main: 'Chaotic Good'
    },
    size: {
      description: 'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: 'Your speed is not reduced by wearing heavy armor.'
    },
    languages: {
      description: 'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Elvish' }
      ]
    },
    traits: [
      { 
        name: 'Darkvision',
        description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
      },
      { 
        name: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      { 
        name: 'Trance',
        description: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
      }
    ],
    sub_races: [ {name: 'High Elf'} ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tools: {
      choose: 1,
      type: 'Artisan',
      tools: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    weapons: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']
  }, {
    name: 'Halfling',
    description: 'Your halfling character has a number of traits in common with all other halflings.',
    ability_bonus: [ 0, 2, 0, 0, 0, 0 ],
    age: {
      adult: 20,
      description: 'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
      max: 200 
    },
    alignment: {
      description: 'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
      main: 'Lawful Good'
    },
    size: {
      description: 'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
      height: {
        min: 3,
        max: 3
      },
      size: 'Small'
    },
    speed: {
      base: 25,
      description: 'Your speed is not reduced by wearing heavy armor.'
    },
    darkvision: {
      distance: 0,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Halfling' }
      ]
    },
    traits: {
      options: {},
      type: []
    },
    sub_races: [ {name: 'Lightfoot Halfling'} ],
    saving_throws: {
      against: '',
      description: ''
    },
    tools: {
      choose: 0,
      type: '',
      tools: []
    },
    weapons: []
  }, {
    name: 'Human',
    description: 'It’s hard to make generalizations about humans, but your human character has these traits.',
    ability_bonus: [ 1, 1, 1, 1, 1, 1 ],
    age: {
      adult: 18,
      description: 'Humans reach adulthood in their late teens and live less than a century.',
      max: 100 
    },
    alignment: {
      description: 'Humans tend toward no particular alignment. The best and the worst are found among them.',
      main: 'Neutral'
    },
    size: {
      description: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
      options: {
        choose: 1,
        type: 'languages',
        from: [
          { name: 'Dwarvish' },
          { name: 'Elvish' },
          { name: 'Giant' },
          { name: 'Gnomish' },
          { name: 'Goblin' },
          { name: 'Halfling' },
          { name: 'Orc' },
          { name: 'Abyssal' },
          { name: 'Celestial' },
          { name: 'Draconic' },
          { name: 'Deep Speech' },
          { name: 'Infernal' },
          { name: 'Primordial' },
          { name: 'Sylvan' },
          { name: 'Undercommon' }
        ]
      },
      type: [{ name: 'Common' }]
    },
    traits: {
      options: {},
      type: []
    },
    sub_races: [],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tools: {
      choose: 1,
      type: 'Artisan',
      tools: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
    },
    weapons: ['Longsword', 'Shortsword', 'Shortbow', 'Longbow']
  },
  {
    name: 'Dragonborn',
    description: 'Your draconic heritage manifests in a variety of traits you share with other dragonborn.',
    ability_bonus: [ 2, 0, 0, 0, 0, 1 ],
    age: {
      adult: 15,
      description: 'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
      max: 80 
    },
    alignment: {
      description: 'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.',
      main: 'Lawful Good'
    },
    size: {
      description: 'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
      height: {
        min: 6,
        max: 7
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Draconic' }
      ]
    },
    traits: {
      options: {
        choose: 1,
        from: [
          {name: 'Breath Weapon (Black)'},
          {name: 'Breath Weapon (Blue)'},
          {name: 'Breath Weapon (Brass)'},
          {name: 'Breath Weapon (Bronze)'},
          {name: 'Breath Weapon (Copper)'},
          {name: 'Breath Weapon (Gold)'},
          {name: 'Breath Weapon (Green)'},
          {name: 'Breath Weapon (Red)'},
          {name: 'Breath Weapon (Silver)'},
          {name: 'Breath Weapon (White)'}
        ],
        type: 'trait'
      },
      type: [
        { name: 'Draconic Anscestry' },
        { name: 'Breath Weapon' },
        { name: 'Damage Resistance (Dragonborn)' }
      ]
    },
    subraces: [],
    tools: {},
    weapons: []
  },
  {
    name: 'Gnome',
    description: 'Your gnome character has certain characteristics in common with all other gnomes',
    ability_bonus: [ 0, 0, 0, 2, 0, 0 ],
    age: {
      adult: 40,
      description: 'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
      max: 500 
    },
    alignment: {
      description: 'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
      main: 'Lawful Neutral'
    },
    size: {
      description: 'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
      height: {
        min: 3,
        max: 4
      },
      size: 'Small'
    },
    speed: {
      base: 25,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Gnomish' }
      ]
    },
    traits: {
      options: {},
      type: [
        { name: 'Darkvision (Gnome)' },
        { name: 'Gnome Cunning' }
      ]
    },
    subraces: [],
    tools: {},
    weapons: []
  },
  {
    name: 'Half-Elf',
    description: 'Your half-elf character has some qualities in common with elves and some that are unique to half-elves.',
    ability_bonus: [ 0, 0, 0, 0, 0, 2 ],
    age: {
      adult: 20,
      description: 'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
      max: 180 
    },
    alignment: {
      description: 'Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others\' demands, and sometimes prove unreliable, or at least unpredictable.',
      main: 'Chaotic Good'
    },
    size: {
      description: 'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
      options: {
        choose: 1,
        type: 'languages',
        from: [
          { name: 'Dwarvish' },
          { name: 'Elvish' },
          { name: 'Giant' },
          { name: 'Gnomish' },
          { name: 'Goblin' },
          { name: 'Halfling' },
          { name: 'Orc' },
          { name: 'Abyssal' },
          { name: 'Celestial' },
          { name: 'Draconic' },
          { name: 'Deep Speech' },
          { name: 'Infernal' },
          { name: 'Primordial' },
          { name: 'Sylvan' },
          { name: 'Undercommon' }
        ]
      },
      type: [
        { name: 'Common' }, 
        { name: 'Gnomish' }
      ]
    },
    traits: {
      options: {},
      type: [
        { name: 'Darkvision (Gnome)' },
        { name: 'Fey Ancestry' },
        { name: 'Skill Versatility' }
      ]
    },
    subraces: [],
    tools: {},
    weapons: []
  },
  {
    name: 'Half-Orc',
    description: 'Your half-orc character has certain traits deriving from your orc ancestry.',
    ability_bonus: [ 2, 0, 1, 0, 0, 0 ],
    age: {
      adult: 14,
      description: 'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
      max: 75 
    },
    alignment: {
      description: 'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
      main: 'Chaotic Evil'
    },
    size: {
      description: 'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Orcish' }
      ]
    },
    traits: {
      options: {},
      type: [
        { name: 'Darkvision (Half-Orc)' },
        { name: 'Savage Attacks' },
        { name: 'Restless Endurance' }
      ]
    },
    trait_options: {},
    subraces: [],
    tools: {},
    weapons: []
  },
  {
    name: 'Tiefling',
    description: 'Tieflings share certain racial traits as a result of their infernal descent.',
    ability_bonus: [ 2, 0, 1, 0, 0, 0 ],
    age: {
      adult: 20,
      description: 'Tieflings mature at the same rate as humans but live a few years longer.',
      max: 180 
    },
    alignment: {
      description: 'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
      main: 'Neutral Evil'
    },
    size: {
      description: 'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
      height: {
        min: 5,
        max: 6
      },
      size: 'Medium'
    },
    speed: {
      base: 30,
      description: ''
    },
    languages: {
      description: 'You can speak, read, and write Common and Infernal.',
      options: {},
      type: [
        { name: 'Common' }, 
        { name: 'Infernal' }
      ]
    },
    starting_proficiency_options: {},
    traits: {
      options: {},
      type: [
        { name: 'Darkvision (Tiefling)' },
        { name: 'Hellish Resistance' },
        { name: 'Infernal Legacy' }
      ]
    },
    subraces: [],
    tools: {},
    weapons: []
  }
];










export const subracesDB = [
  {
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
    weapons: [],
  },
  {
    name: 'High Elf',
    description: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
    ability_bonus: [ 0, 0, 0, 1, 0, 0 ],
    hit_points: 0,
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
        name: 'Darkvision',
        description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
      },
      { 
        name: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      { 
        name: 'Trance',
        description: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
      }
    ],
    saving_throws: {},
    skills: {},
    tools: {},
    weapons: [],
  },
  {
    name: 'Lightfoot Halfling',
    description: 'As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life.',
    ability_bonus: [ 0, 0, 0, 0, 0, 1 ],
    hit_points: 0,
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
        name: 'Darkvision',
        description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
      },
      { 
        name: 'Fey Ancestry',
        description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.'
      },
      { 
        name: 'Trance',
        description: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'
      }
    ],
    saving_throws: {},
    skills: {},
    tools: {},
    weapons: [],
  }
]










export const alignmentDB = [
  {
    name: 'Lawful Good',
    description: 'Those who can be counted on to do the right thing as expected by society.'
  },
  {
    name: 'Lawful Neutral',
    description: 'Those who act in accordance with law, tradition, or personal codes.'
  },
  {
    name: 'Lawful Evil',
    description: 'Those who methodically take what they want, within the limits of a code of tradition, loyalty, or order.'
  },
  {
    name: 'Neutral Good',
    description: 'Those who do the best they can to help others according to their needs.'
  },
  {
    name: 'Neutral',
    description: 'Those who who prefer to steer clear of moral questions and don\'t take sides.'
  },
  {
    name: 'Neutral Evil',
    description: 'Those who do whatever they can get away with, without compassion or qualms.'
  },
  {
    name: 'Chaotic Good',
    description: 'Those who act as their conscience directs, with little regard for what others expect.'
  },
  {
    name: 'Chaotic Neutral',
    description: 'Those who follow their whims, holding their personal freedom above all else.'
  },
  {
    name: 'Chaotic Evil',
    description: 'Those who act with arbitrary violence, spurred by their greed, hatred, or bloodlust.'
  }
];










export const classDB = [
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
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
    spellcasting: 'tba',
    weapons: [
      { name: 'Dagger' },
      { name: 'Quarterstaff' },
      { name: 'Dart' },
      { name: 'Sling' }
    ]
  }
];









export const featsDB = [
  {
    name: 'Grappler',
    description: 'You’ve developed the skills necessary to hold your own in close-quarters grappling.',
    prerequisite: {
      ability: 'Strength',
      abilityScore: 13
    },
    benefits: [
      'You have advantage on attack rolls against a creature you are grappling.',
      'You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.'
    ]
  }
];










export const skillsDB = [
  {
    name: 'Acrobatics',
    desc: 'Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you’re trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship’s deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.',
    ability_score: {
      name: 'Strength'
    }
  }, {
    name: 'Animal Handling',
    desc: 'When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal’s intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.',
    ability_score: {
      name: 'Wisdom'
    }
  }, {
    name: 'Arcana',
    desc: 'Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes.',
    ability_score: {
      name: 'Intelligence'
    }
  }, {
    name: 'Athletics',
    desc: 'Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming.',
    ability_score: {
      name: 'Strength'
    }
  }, {
    name: 'Deception',
    desc: 'Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone’s suspicions with false assurances, or maintain a straight face while telling a blatant lie.',
    ability_score: {
      name: 'Charisma'
    }
  }, {
    name: 'History',
    desc: 'Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.',
    ability_score: {
      name: 'Intelligence'
    }
  }, {
    name: 'Insight',
    desc: 'Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone’s next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms.',
    ability_score: {
      name: 'Wisdom'
    }
  }, {
    name: 'Intimidation',
    desc: 'When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.',
    ability_score: {
      name: 'Charisma'
    }
  }, {
    name: 'Investigation',
    desc: 'When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check.',
    ability_score: {
      name: 'Intelligence'
    }
  }, {
    name: 'Medicine',
    desc: 'A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.',
    ability_score: {
      name: 'Wisdom'
    }
  }, {
    name: 'Nature',
    desc: 'Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles.',
    ability_score: {
      name: 'Intelligence'
    }
  }, {
    name: 'Perception',
    desc: 'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.',
    ability_score: {
      name: 'Wisdom'
    }
  }, {
    name: 'Performance',
    desc: 'Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment.',
    ability_score: {
      name: 'Charisma'
    }
  }, {
    name: 'Persuasion',
    desc: 'When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk.',
    ability_score: {
      name: 'Charisma'
    }
  }, {
    name: 'Religion',
    desc: 'Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.',
    ability_score: {
      name: 'Intelligence'
    }
  }, {
    name: 'Sleight of Hand',
    desc: 'Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person’s pocket.',
    ability_score: {
      name: 'Dexterity'
    }
  }, {
    name: 'Stealth',
    desc: 'Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard.',
    ability_score: {
      name: 'Dexterity'
    }
  }, {
    name: 'Survival',
    desc: 'The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards.',
    ability_score: {
      name: 'Wisdom'
    }
  }
];










export const weaponDB = [
  {
    name: 'Club',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Light'
      }
    ]
  }, {
    name: 'Dagger',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 1,
    properties: [
      {
        name: 'Finesse'
      }, {
        name: 'Light'
    },   
      {
        name: 'Thrown'
      }
    ],
    throw_atk_range: {
      normal: 20,
      long: 60
    }
  }, {
    name: 'Greatclub',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 2,
      unit: 'sp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 10,
    properties: [
      {
        name: 'Two-Handed'
      }
    ]
  }, {  
    name: 'Handaxe',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Light'
      }, {
        name: 'Thrown'
      },   
      {
        name: 'Monk'
      }
    ],
    throw_atk_range: {
      normal: 20,
      long: 60
    }
  }, {
    name: 'Javelin',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Thrown'
      } 
    ],
    throw_atk_range: {
      normal: 30,
      long: 120
    }
  }, {
    name: 'Light Hammer',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Light'
      }, {
        name: 'Thrown'
    },   
    {
      name: 'Monk'
    }],
    throw_atk_range: {
      normal: 20,
      long: 60
    }
  }, {
    name: 'Mace',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 4,
    properties: [
      {
        name: 'Monk'
      }
    ]
  }, {  
    name: 'Quarterstaff',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 2,
      unit: 'sp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 4,
    properties: [
      {
        name: 'Versatile'
      } 
    ],
    two_hands_damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Bludgeoning'
    }
  }, {
    name: 'Sickle',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Light'
      }
    ]
  }, {
    name: 'Spear',
    category: 'Simple',
    range: 'Melee',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
        name: 'Thrown'
      }, {
        name: 'Versatile'
      },   
      {
        name: 'Monk'
      }
    ],
    throw_atk_range: {
      normal: 20,
      long: 60
    },
    two_hands_damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    }
  }, {
    name: 'Crossbow, light',
    category: 'Simple',
    range: 'Ranged',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 5,
    properties: [
      {
        name: 'Ammunition'
      }, {
        name: 'Loading'
      },   
      {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Dart',
    category: 'Simple',
    range: 'Ranged',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 0.25,
    properties: [
      {
        name: 'Finesse'
      }, {
        name: 'Thrown'
      } 
    ],
    throw_atk_range: {
      normal: 20,
      long: 60
    }
  }, {
    name: 'Shortbow',
    category: 'Simple',
    range: 'Ranged',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Ammunition'
      }, {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Sling',
    category: 'Simple',
    range: 'Ranged',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 0,
    properties: [
      {
        name: 'Ammunition'
      }
    ]
  }, {  
    name: 'Battleaxe',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 4,
    properties: [
      {
        name: 'Versatile'
      }],
    two_hands_damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Slashing'
    }
  }, {
    name: 'Flail',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [] 
  }, {
    name: 'Glaive',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 6,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Reach'
      },   
      {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Greataxe',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 12,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 7,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Greatsword',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    damage: {
      dice_count: 2,
      dice_value: 6,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 6,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Halberd',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 6,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Reach'
      },   
      {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Lance',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 12,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 6,
    properties: [
      {
        name: 'Reach'
      }, {
        name: 'Special'
      } 
    ],
    special: 'You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted.'
  }, {
    name: 'Longsword',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
        name: 'Versatile'
      }
    ],
    two_hands_damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Slashing'
    }
  }, {
    name: 'Maul',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 2,
      dice_value: 6,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 10,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Morningstar',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 4,
    properties: [] 
  }, {
    name: 'Pike',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 18,
    properties: [
      {
        name: 'Heavy'
      }, {
        name: 'Reach'
      },   
      {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Rapier',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Finesse'
      }
    ]
  }, {  
    name: 'Scimitar',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
        name: 'Finesse'
      }, {
        name: 'Light'
      }
    ]
  }, {
    name: 'Shortsword',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Finesse'
      }, {
        name: 'Light'
      },   
      {
        name: 'Monk'
      }
    ]
  }, {
    name: 'Trident',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 4,
    properties: [
      {
        name: 'Thrown'
      }, {
        name: 'Versatile'
      }
    ],
    throw_atk_range: {
      normal: 20,
      long: 60
    }
  }, {
    name: 'War pick',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [] 
  }, {
    name: 'Warhammer',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Bludgeoning'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
        name: 'Versatile'
      }
    ],
    two_hands_damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Bludgeoning'
    }
  }, {
    name: 'Whip',
    category: 'Martial',
    range: 'Melee',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 4,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
        name: 'Finesse'
      }, {
        name: 'Reach'
      }
    ]
  }, {
    name: 'Blowgun',
    category: 'Martial',
    range: 'Ranged',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 1,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 1,
    properties: [
      {
          name: 'Ammunition',
        }, {
          name: 'Loading',
        }
      ]
  }, {
    name: 'Crossbow, hand',
    category: 'Martial',
    range: 'Ranged',
    cost: {
      quantity: 75,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 6,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
          name: 'Ammunition',
        }, {
        name: 'Light'
      },   
      {
        name: 'Loading',
      }
    ]
  }, {
    name: 'Crossbow, heavy',
    category: 'Martial',
    range: 'Ranged',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 10,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 18,
    properties: [
      {
          name: 'Ammunition',
        }, {
        name: 'Light'
      },   
      {
          name: 'Loading',
        }, {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Longbow',
    category: 'Martial',
    range: 'Ranged',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 8,
      type: 'Piercing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 2,
    properties: [
      {
          name: 'Ammunition',
        }, {
        name: 'Heavy'
      },   
      {
        name: 'Two-Handed'
      }
    ]
  }, {
    name: 'Net',
    category: 'Martial',
    range: 'Ranged',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    damage: {
      dice_count: 1,
      dice_value: 0,
      type: 'Slashing'
    },
    atk_range: {
      normal: 5,
      long: null
    },
    weight: 3,
    properties: [
      {
        name: 'Thrown'
      }, {
        name: 'Special'
      } 
    ],
    special: 'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.',
    throw_atk_range: {
      normal: 5,
      long: 15
    }
  }
]










export const armorDB = [
  {
    name: 'Padded',
    armor_category: 'Light',
    armor_class: {
      base: 11,
      dex_bonus: true,
      max_bonus: null
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 8,
    cost: {
      quantity: 5,
      unit: 'gp'
    }
  }, {
    name: 'Leather',
    armor_category: 'Light',
    armor_class: {
      base: 11,
      dex_bonus: true,
      max_bonus: null
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 10,
    cost: {
      quantity: 10,
      unit: 'gp'
    }
  }, {
    name: 'Studded Leather',
    armor_category: 'Light',
    armor_class: {
      base: 12,
      dex_bonus: true,
      max_bonus: null
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 13,
    cost: {
      quantity: 45,
      unit: 'gp'
    }
  }, {
    name: 'Hide',
    armor_category: 'Medium',
    armor_class: {
      base: 12,
      dex_bonus: true,
      max_bonus: 2
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 12,
    cost: {
      quantity: 10,
      unit: 'gp'
    }
  }, {
    name: 'Chain Shirt',
    armor_category: 'Medium',
    armor_class: {
      base: 13,
      dex_bonus: true,
      max_bonus: 2
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: {
      quantity: 50,
      unit: 'gp'
    }
  }, {
    name: 'Scale Mail',
    armor_category: 'Medium',
    armor_class: {
      base: 14,
      dex_bonus: true,
      max_bonus: 2
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 45,
    cost: {
      quantity: 50,
      unit: 'gp'
    }
  }, {
    name: 'Breastplate',
    armor_category: 'Medium',
    armor_class: {
      base: 14,
      dex_bonus: true,
      max_bonus: 2
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 20,
    cost: {
      quantity: 400,
      unit: 'gp'
    }
  }, {
    name: 'Half Plate',
    armor_category: 'Medium',
    armor_class: {
      base: 15,
      dex_bonus: true,
      max_bonus: 2
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: {
      quantity: 750,
      unit: 'gp'
    }
  }, {
    name: 'Ring Mail',
    armor_category: 'Heavy',
    armor_class: {
      base: 14,
      dex_bonus: false,
      max_bonus: null
    },
    str_minimum: 0,
    stealth_disadvantage: true,
    weight: 40,
    cost: {
      quantity: 30,
      unit: 'gp'
    }
  }, {
    name: 'Chain Mail',
    armor_category: 'Heavy',
    armor_class: {
      base: 16,
      dex_bonus: false,
      max_bonus: null
    },
    str_minimum: 13,
    stealth_disadvantage: true,
    weight: 55,
    cost: {
      quantity: 75,
      unit: 'gp'
    }
  }, {
    name: 'Splint',
    armor_category: 'Heavy',
    armor_class: {
      base: 17,
      dex_bonus: false,
      max_bonus: null
    },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 60,
    cost: {
      quantity: 200,
      unit: 'gp'
    }
  }, {
    name: 'Plate',
    armor_category: 'Heavy',
    armor_class: {
      base: 18,
      dex_bonus: false,
      max_bonus: null
    },
    str_minimum: 15,
    stealth_disadvantage: true,
    weight: 65,
    cost: {
      quantity: 1500,
      unit: 'gp'
    }
  }, {
    name: 'Shield',
    armor_category: 'Shield',
    armor_class: {
      base: 2,
      dex_bonus: false,
      max_bonus: null
    },
    str_minimum: 0,
    stealth_disadvantage: false,
    weight: 6,
    cost: {
      quantity: 10,
      unit: 'gp'
    }
  }
]










export const gearDB = [
  {
    name: 'Abacus',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 2
  }, {
    name: 'Acid (vial)',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 1,
    desc: ['As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.', 'On a hit, the target takes 2d6 acid damage.']
  }, {
    name: 'Alchemist’s fire (flask)',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    desc: ['This sticky, adhesive fluid ignites when exposed to air.', 'As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist’s fire as an improvised weapon.', 'On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.'],
    weight: 1
  }, {
    name: 'Arrow',
    category: 'Ammunition',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 1
  }, {
    name: 'Blowgun needle',
    category: 'Ammunition',
    cost: {
      quantity: 2,
      unit: 'cp'
    },
    weight: 1
  }, {
    name: 'Crossbow bolt',
    category: 'Ammunition',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 1.5
  }, {
    name: 'Sling bullet',
    category: 'Ammunition',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 1.5
  }, {
    name: 'Amulet',
    category: 'Holy Symbol',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 1,
    desc: ['A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.', 'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.']
  }, {
    name: 'Antitoxin (vial)',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 0,
    desc: ['A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.']
  }, {
    name: 'Crystal',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    desc: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Orb',
    category: 'Arcane focus',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 3,
    desc: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Rod',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 2,
    desc: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Staff',
    category: 'Arcane focus',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 4,
    desc: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Wand',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    desc: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Backpack',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 5
  }, {
    name: 'Ball bearings (bag of 1,000)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 2,
    desc: ['As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side.', 'A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone.', 'A creature moving through the area at half speed doesn’t need to make the save.']
  }, {
    name: 'Barrel',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 70
  }, {
    name: 'Basket',
    category: 'Standard Gear',
    cost: {
      quantity: 4,
      unit: 'sp'
    },
    weight: 2
  }, {
    name: 'Bedroll',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 7
  }, {
    name: 'Bell',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Blanket',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 3
  }, {
    name: 'Block and tackle',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 5,
    desc: ['A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.']
  }, {
    name: 'Book',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 5,
    desc: ['A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section).']
  }, {
    name: 'Bottle, glass',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 2
  }, {
    name: 'Bucket',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 2
  }, {
    name: 'Caltrops',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 2,
    desc: ['As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side.', 'Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage.', 'Taking this damage reduces the creature’s walking speed by 10 feet until the creature regains at least 1 hit point.', 'A creature moving through the area at half speed doesn’t need to make the save.']
  }, {
    name: 'Candle',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 0,
    desc: ['For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.']
  }, {
    name: 'Case, crossbow bolt',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 1,
    desc: ['This wooden case can hold up to twenty crossbow bolts.']
  }, {
    name: 'Case, map or scroll',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 1,
    desc: ['This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.']
  }, {
    name: 'Chain (10 feet)',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 10,
    desc: ['A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.']
  }, {
    name: 'Chalk (1 piece)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 0
  }, {
    name: 'Chest',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 25
  }, {
    name: 'Clothes, common',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 3
  }, {
    name: 'Clothes, costume',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 4
  }, {
    name: 'Clothes, fine',
    category: 'Standard Gear',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 6
  }, {
    name: 'Clothes, traveler’s',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 4
  }, {
    name: 'Component pouch',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 2,
    desc: [' A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell’s description).']
  }, {
    name: 'Crowbar',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 5,
    desc: ['Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied.']
  }, {
    name: 'Sprig of mistletoe',
    category: 'Druidic focus',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0,
    desc: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Totem',
    category: 'Druidic focus',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0,
    desc: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Wooden staff',
    category: 'Druidic focus',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 4,
    desc: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Yew wand',
    category: 'Druidic focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    desc: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Emblem',
    category: 'Holy Symbol',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 0,
    desc: ['A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.', 'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.']
  }, {
    name: 'Fishing tackle',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 4,
    desc: ['This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.']
  }, {
    name: 'Flask or tankard',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'cp'
    },
    weight: 1
  }, {
    name: 'Grappling hook',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 4
  }, {
    name: 'Hammer',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 3
  }, {
    name: 'Hammer, sledge',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 10
  }, {
    name: 'Holy water (flask)',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 1,
    desc: ['As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon.', 'If the target is a fiend or undead, it takes 2d6 radiant damage.', 'A cleric or paladin may create holy water by performing a special ritual.', 'The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.']
  }, {
    name: 'Hourglass',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 1
  }, {
    name: 'Hunting trap',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    desc: ['When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.', 'A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long).', 'A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.'],
    weight: 25
  }, {
    name: 'Ink (1 ounce bottle)',
    category: 'Standard Gear',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Ink pen',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'cp'
    },
    weight: 0
  }, {
    name: 'Jug or pitcher',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'cp'
    },
    weight: 4
  }
];










export const kitsDB = [
  {
    name: 'Climber’s Kit',
    category: 'Kit',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 12,
    desc: ['A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can’t climb more than 25 feet away from that point without undoing the anchor.']
  }, {
    name: 'Disguise Kit',
    category: 'Kit',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 3,
    desc: ['This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.']
  }, {
    name: 'Forgery Kit',
    category: 'Kit',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 5,
    desc: ['This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other Supplies necessary to create convincing forgeries of physical documents. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.']
  }, {
    name: 'Herbalism Kit',
    category: 'Kit',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 3,
    desc: ['This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.']
  }, {
    name: 'Healer’s Kit',
    category: 'Kit',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 3,
    desc: ['This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.']
  }, {
    name: 'Mess Kit',
    category: 'Kit',
    cost: {
      quantity: 2,
      unit: 'sp'
    },
    weight: 1,
    desc: ['This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.']
  }, {
    name: 'Poisoner’s Kit',
    category: 'Kit',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 2,
    desc: ['A poisoner’s kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.']
  }, {
    name: 'Ladder (10-foot)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 25
  }, {
    name: 'Lamp',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 1,
    desc: ['A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.']
  }, {
    name: 'Lantern, bullseye',
    category: 'Standard Gear',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 2,
    desc: ['A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.']
  }, {
    name: 'Lantern, hooded',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 2,
    desc: ['A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.']
  }, {
    name: 'Lock',
    category: 'Standard Gear',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    desc: ['A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your GM may decide that better locks are available for higher prices.']
  }, {
    name: 'Magnifying glass',
    category: 'Standard Gear',
    cost: {
      quantity: 100,
      unit: 'gp'
    },
    weight: 0,
    desc: ['This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite.', 'A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.']
  }, {
    name: 'Manacles',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 6,
    desc: ['These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check.', 'Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.']
  }, {
    name: 'Mirror, steel',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 0.5
  }, {
    name: 'Oil (flask)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 1,
    desc: ['Oil usually comes in a clay flask that holds 1 pint.', 'As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon.', 'On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil.', 'You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level.', 'If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.']
  }, {
    name: 'Paper (one sheet)',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'sp'
    },
    weight: 0
  }, {
    name: 'Parchment (one sheet)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 0
  }, {
    name: 'Perfume (vial)',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Pick, miner’s',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 10
  }, {
    name: 'Piton',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 0.25
  }, {
    name: 'Poison, basic (vial)',
    category: 'Standard Gear',
    cost: {
      quantity: 100,
      unit: 'gp'
    },
    weight: 0,
    desc: ['You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.']
  }, {
    name: 'Pole (10-foot)',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 7
  }, {
    name: 'Pot, iron',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 10
  }, {
    name: 'Potion of healing',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 0.5,
    desc: ['A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.']
  }, {
    name: 'Pouch',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 1,
    desc: ['A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch (described earlier in this section).']
  }, {
    name: 'Quiver',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 1,
    desc: ['A quiver can hold up to 20 arrows.']
  }, {
    name: 'Ram, portable',
    category: 'Standard Gear',
    cost: {
      quantity: 4,
      unit: 'gp'
    },
    weight: 35,
    desc: ['You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.']
  }, {
    name: 'Rations (1 day)',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 2,
    desc: ['Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.']
  }, {
    name: 'Reliquary',
    category: 'Holy Symbol',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 2,
    desc: ['A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.', 'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.']
  }, {
    name: 'Robes',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 4
  }, {
    name: 'Rope, hempen (50 feet)',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 10,
    desc: ['Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.']
  }, {
    name: 'Rope, silk (50 feet)',
    category: 'Standard Gear',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 5,
    desc: ['Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.']
  }, {
    name: 'Sack',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 0.5
  }, {
    name: 'Scale, merchant’s',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 3,
    desc: ['A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.']
  }, {
    name: 'Sealing wax',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 0
  }, {
    name: 'Shovel',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 5
  }, {
    name: 'Signal whistle',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 0
  }, {
    name: 'Signet ring',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Soap',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'cp'
    },
    weight: 0
  }, {
    name: 'Spellbook',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 3,
    desc: ['Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.']
  }, {
    name: 'Spike, iron',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 5
  }, {
    name: 'Spyglass',
    category: 'Standard Gear',
    cost: {
      quantity: 1000,
      unit: 'gp'
    },
    weight: 1,
    desc: ['Objects viewed through a spyglass are magnified to twice their size.']
  }, {
    name: 'Tent, two-person',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 20,
    desc: ['A simple and portable canvas shelter, a tent sleeps two.']
  }, {
    name: 'Tinderbox',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 1,
    desc: ['This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action.', 'Lighting any other fire takes 1 minute.']
  }, {
    name: 'Torch',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 1,
    desc: ['A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.']
  }, {
    name: 'Vial',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Waterskin',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'sp'
    },
    weight: 5
  }, {
    name: 'Whetstone',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 1
  }, {
    name: 'Burglar\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 16,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/66',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/77',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/88',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/97',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/125',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/115',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/120',
      quantity: 2
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/133',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/149',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/152',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/136',
      quantity:1
    }]
  }, {
    name: 'Diplomat\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 39,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/82',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/79',
      quantity: 2
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/85',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/102',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/103',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/113',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/120',
      quantity: 2
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/121',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/123',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/140',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/144',
      quantity:1
    }]
  }, {
    name: 'Dungeoneer\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 12,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/88',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/97',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/125',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/150',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/133',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/152',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/136',
      quantity:1
    }]
  }, {
    name: 'Entertainer\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/69',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/84',
      quantity: 2
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/77',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/133',
      quantity: 5
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/152',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/106',
      quantity:1
    }]
  }, {
    name: 'Explorer\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/69',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/110',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/149',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/150',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/133',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/152',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/106',
      quantity:1
    }]
  }, {
    name: 'Priest\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 19,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/71',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/77',
      quantity: 10
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/149',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/133',
      quantity: 2
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/152',
      quantity:1
    }]
  }, {
    name: 'Scholar\'s Pack',
    category: 'Equipment Pack',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    contents: [{
      item_url: 'http://www.dnd5eapi.co/api/equipment/65',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/73',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/102',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/103',
      quantity: 1
   }, {
      item_url: 'http://www.dnd5eapi.co/api/equipment/122',
      quantity: 0
    }]
  }
];










export const toolsDB = [
  {
    name: 'Alchemist’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 8,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Brewer’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 9,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Calligrapher’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Carpenter’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 8,
      unit: 'gp'
    },
    weight: 6,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cartographer’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 6,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cobbler’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cook’s utensils',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 8,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Glassblower’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Jeweler’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 2,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Leatherworker’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Mason’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 8,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Painter’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Potter’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 3,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Smith’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 8,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Tinker’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 10,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Weaver’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Woodcarver’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 5,
    desc: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Dice set',
    category: 'Gaming Sets',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 0,
    desc: ['This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.']
  }, {
    name: 'Playing card set',
    category: 'Gaming Sets',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 0,
    desc: ['This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.']
  }, {
    name: 'Bagpipes',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 6,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Drum',
    category: 'Musical Instrument',
    cost: {
      quantity: 6,
      unit: 'gp'
    },
    weight: 3,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Dulcimer',
    category: 'Musical Instrument',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 10,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Flute',
    category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 1,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Lute',
    category: 'Musical Instrument',
    cost: {
      quantity: 35,
      unit: 'gp'
    },
    weight: 2,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Lyre',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 2,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Horn',
    category: 'Musical Instrument',
    cost: {
      quantity: 3,
      unit: 'gp'
    },
    weight: 2,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Pan flute',
    category: 'Musical Instrument',
    cost: {
      quantity: 12,
      unit: 'gp'
    },
    weight: 2,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Shawm',
    category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 1,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Viol',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 1,
    desc: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Navigator’s Tools',
    category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 2,
    desc: ['This set of instruments is used for navigation at sea. Proficiency with navigator’s tools lets you chart a ship’s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.']
  }, {
    name: 'Thieves’ Tools',
    category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 1,
    desc: ['This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.']
  }
]










export const mountsDB = [
  {
    name: 'Camel',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    'speed': {
      quantity: 50,
      unit: 'ft/round'
    },
    'capacity': '480 lb.'
  }, {
    name: 'Donkey',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 8,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '420 lb.'
  }, {
    name: 'Mule',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 8,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '420 lb.'
  }, {
    name: 'Elephant',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 200,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '1,320 lb.'
  }, {
    name: 'Horse, draft',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '540 lb.'
  }, {
    name: 'Horse, riding',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 75,
      unit: 'gp'
    },
    'speed': {
      quantity: 60,
      unit: 'ft/round'
    },
    'capacity': '480 lb.'
  }, {
    name: 'Mastiff',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '195 lb.'
  }, {
    name: 'Pony',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    'speed': {
      quantity: 40,
      unit: 'ft/round'
    },
    'capacity': '225 lb.'
  }, {
    name: 'Warhorse',
    category: 'Mounts and Other Animals',
    cost: {
      quantity: 400,
      unit: 'gp'
    },
    'speed': {
      quantity: 60,
      unit: 'ft/round'
    },
    'capacity': '540 lb.'
  }, {
    name: 'Barding: Padded',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 16,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Leather',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    weight: 20,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Studded Leather',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 180,
      unit: 'gp'
    },
    weight: 26,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Hide',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    weight: 24,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Chain shirt',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp'
    },
    weight: 40,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Scale mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp'
    },
    weight: 90,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Breastplate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 1600,
      unit: 'gp'
    },
    weight: 40,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Half plate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 3000,
      unit: 'gp'
    },
    weight: 80,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Ring mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 12,
      unit: 'gp'
    },
    weight: 80,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Chain mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 300,
      unit: 'gp'
    },
    weight: 110,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Splint',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 800,
      unit: 'gp'
    },
    weight: 120,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Plate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 6000,
      unit: 'gp'
    },
    weight: 130,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Bit and bridle',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 1
  }, {
    name: 'Carriage',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 100,
      unit: 'gp'
    },
    weight: 600
  }, {
    name: 'Cart',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 200
  }, {
    name: 'Chariot',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 250,
      unit: 'gp'
    },
    weight: 100
  }, {
    name: 'Animal Feed (1 day)',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 10
  }, {
    name: 'Saddle, Exotic',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 60,
      unit: 'gp'
    },
    weight: 50,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Saddle, Military',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 30,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Saddle, Pack',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 15,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Riding',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 25
  }, {
    name: 'Saddlebags',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 4,
      unit: 'gp'
    },
    weight: 8
  }, {
    name: 'Sled',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 300
  }, {
    name: 'Stabling (1 day)',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 0
  }, {
    name: 'Wagon',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 35,
      unit: 'gp'
    },
    weight: 400
  }, {
    name: 'Barding: Padded',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 16,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Leather',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    weight: 20,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Studded Leather',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 180,
      unit: 'gp'
    },
    weight: 26,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Hide',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 40,
      unit: 'gp'
    },
    weight: 24,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Chain shirt',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp'
    },
    weight: 40,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Scale mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 200,
      unit: 'gp'
    },
    weight: 90,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Breastplate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 1600,
      unit: 'gp'
    },
    weight: 40,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Half plate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 3000,
      unit: 'gp'
    },
    weight: 80,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Ring mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 12,
      unit: 'gp'
    },
    weight: 80,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Chain mail',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 300,
      unit: 'gp'
    },
    weight: 110,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Splint',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 800,
      unit: 'gp'
    },
    weight: 120,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Barding: Plate',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 6000,
      unit: 'gp'
    },
    weight: 130,
    desc: ['Barding is armor designed to protect an animal’s head, neck, chest, and body. Any type of armor shown on the Armor table can be purchased as barding. The cost is four times the equivalent armor made for humanoids, and it weighs twice as much.']
  }, {
    name: 'Bit and bridle',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Carriage',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 100,
      unit: 'gp'
    },
    weight: 60
  }, {
    name: 'Cart',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 20
  }, {
    name: 'Chariot',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 250,
      unit: 'gp'
    },
    weight: 10
  }, {
    name: 'Animal Feed (1 day)',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'cp'
    },
    weight: 1
  }, {
    name: 'Saddle, Exotic',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 60,
      unit: 'gp'
    },
    weight: 50,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Saddle, Military',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 30,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Saddle, Pack',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 15,
    desc: ['A military saddle braces the rider, helping you keep your seat on an active mount in battle. It gives you advantage on any check you make to remain mounted. An exotic saddle is required for riding any aquatic or flying mount.']
  }, {
    name: 'Riding',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 2
  }, {
    name: 'Saddlebags',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 4,
      unit: 'gp'
    },
    weight: 0
  }, {
    name: 'Sled',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 30
  }, {
    name: 'Stabling (1 day)',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 0
  }, {
    name: 'Wagon',
    category: 'Tack, Harness, and Drawn Vehicles',
    cost: {
      quantity: 35,
      unit: 'gp'
    },
    weight: 40
  }, {
    name: 'Galley',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 30000,
      unit: 'gp'
    },
    'speed': {
      quantity: 4,
      unit: 'mph'
    }
  }, {
    name: 'Keelboat',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 3000,
      unit: 'gp'
    },
    'speed': {
      quantity: 1,
      unit: 'mph'
    },
    desc: ['Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can’t be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land.']
  }, {
    name: 'Longship',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 10000,
      unit: 'gp'
    },
    'speed': {
      quantity: 3,
      unit: 'mph'
    }
  }, {
    name: 'Rowboat',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    'speed': {
      quantity: 1.5,
      unit: 'mph'
    },
    desc: ['Keelboats and rowboats are used on lakes and rivers. If going downstream, add the speed of the current (typically 3 miles per hour) to the speed of the vehicle. These vehicles can’t be rowed against any significant current, but they can be pulled upstream by draft animals on the shores. A rowboat weighs 100 pounds, in case adventurers carry it over land.']
  }, {
    name: 'Sailing ship',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 10000,
      unit: 'gp'
    },
    'speed': {
      quantity: 2,
      unit: 'mph'
    }
  }, {
    name: 'Warship',
    category: 'Waterborne Vehicles',
    cost: {
      quantity: 25000,
      unit: 'gp'
    },
    'speed': {
      quantity: 2.5,
      unit: 'mph'
    }
  }
]