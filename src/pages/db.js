export const raceDB = [
  {
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
    weapon_proficiency: ['Battleaxes', 'Handaxes', 'Light hammers', 'Warhammers']
  },
  {
    name: 'Elf',
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
    darkvision: {
      distance: 60,
      description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You canâ€™t discern color in darkness, only shades of gray'
    },
    languages: {
      description: 'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
      type: ['Common', 'Elvish']
    },
    sub_races: [
      {
        name: 'High Elf',
        description: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many fantasy gaming worlds, there are two kinds of high elves. One type is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type is more common and more friendly, and often encountered among humans and other races.',
        ability_bonus: [ 0, 0, 0, 1, 0, 0 ],
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
    weapon_proficiency: ['Longswords', 'Shortswords', 'Shortbows', 'Longbows']
  }
];

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
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Barbarian' },
    spellcasting: {}
  },
  {
    name: 'Bard',
    hit_die: 8,
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Bard' },
    spellcasting: {}
  },
  {
    name: 'Cleric',
    hit_die: 8,
    proficiency_choices: [
      {
        choose: 2,
        type: 'proficiencies',
        from: [
          { name: 'Skill: Animal Handling' },
          { name: 'Skill: Athletics' },
          { name: 'Skill: Intimidation' },
          { name: 'Skill: Nature' },
          { name: 'Skill: Perception' },
          { name: 'Skill: Survival' }
        ]
      }
    ],
    proficiencies: [
      { name: 'Light armor' },
      { name: 'Medium armor' },
      { name: 'Shields' },
      { name: 'Simple weapons' },
      { name: 'Martial weapons' }
    ],
    saving_throws: [
      { name: 'Strength' },
      { name: 'Constitution' }
    ],
    starting_equipment: { class: 'Cleric' },
    spellcasting: {}
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