
const raceDB = [
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
    traits: {
      options: {},
      type: [
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
      ]
    },
    sub_races: [ {name: 'Hill Dwarf'} ],
    saving_throws: {
      against: 'Poison',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
    },
    tools: {
      choose: 1,
      type: 'Artisan',
      from: ['Smith Tools', 'Brewer Supplies', 'Mason Tools']
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
    traits: {
      options: {},
      type: [
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
      ]
    },
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
          'Breath Weapon (Black)',
          'Breath Weapon (Blue)',
          'Breath Weapon (Brass)',
          'Breath Weapon (Bronze)',
          'Breath Weapon (Copper)',
          'Breath Weapon (Gold)',
          'Breath Weapon (Green)',
          'Breath Weapon (Red)',
          'Breath Weapon (Silver)',
          'Breath Weapon (White)'
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
]

module.exports = { raceDB }