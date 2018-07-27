
const toolDB = [
  {
    name: 'Alchemist’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 8,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Brewer’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 9,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Calligrapher’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Carpenter’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 8,
      unit: 'gp'
    },
    weight: 6,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cartographer’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 15,
      unit: 'gp'
    },
    weight: 6,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cobbler’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Cook’s utensils',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 8,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Glassblower’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Jeweler’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 2,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Leatherworker’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Mason’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 8,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Painter’s Supplies',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Potter’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 3,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Smith’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 8,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Tinker’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 10,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Weaver’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Woodcarver’s Tools',
    category: 'Artisan\'s Tools',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 5,
    description: ['These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items related to a single craft. Proficiency with a set of artisan’s tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan’s tools requires a separate proficiency.']
  }, {
    name: 'Dice set',
    category: 'Gaming Sets',
    cost: {
      quantity: 1,
      unit: 'sp'
    },
    weight: 0,
    description: ['This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.']
  }, {
    name: 'Playing card set',
    category: 'Gaming Sets',
    cost: {
      quantity: 5,
      unit: 'sp'
    },
    weight: 0,
    description: ['This item encompasses a wide range of game pieces, including dice and decks of cards (for games such as Three-Dragon Ante). A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.']
  }, {
    name: 'Bagpipes',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 6,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Drum',
    category: 'Musical Instrument',
    cost: {
      quantity: 6,
      unit: 'gp'
    },
    weight: 3,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Dulcimer',
    category: 'Musical Instrument',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 10,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Flute',
    category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 1,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Lute',
    category: 'Musical Instrument',
    cost: {
      quantity: 35,
      unit: 'gp'
    },
    weight: 2,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Lyre',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 2,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Horn',
    category: 'Musical Instrument',
    cost: {
      quantity: 3,
      unit: 'gp'
    },
    weight: 2,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Pan flute',
    category: 'Musical Instrument',
    cost: {
      quantity: 12,
      unit: 'gp'
    },
    weight: 2,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Shawm',
    category: 'Musical Instrument',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 1,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Viol',
    category: 'Musical Instrument',
    cost: {
      quantity: 30,
      unit: 'gp'
    },
    weight: 1,
    description: ['Several of the most common types of musical instruments are shown on the table as examples. If you have proficiency with a given musical instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of musical instrument requires a separate proficiency.']
  }, {
    name: 'Navigator’s Tools',
    category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 2,
    description: ['This set of instruments is used for navigation at sea. Proficiency with navigator’s tools lets you chart a ship’s course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.']
  }, {
    name: 'Thieves’ Tools',
    category: 'Other Tools',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 1,
    description: ['This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.']
  }
]

module.exports = { toolDB }