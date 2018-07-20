
const subraceDB = [
  {
    name: 'Hill Dwarf',
    description: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
    ability_bonus: [0, 0, 0, 0, 0, 0],
    hit_points: 1,
    traits: [
      {
        name: 'darkvision',
        description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray.'
      },
      { 
        name: 'Dwarven Toughness',
        description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
      }
    ]
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
    tools: {},
    weapons: [],
  }
]

module.exports = { subraceDB }