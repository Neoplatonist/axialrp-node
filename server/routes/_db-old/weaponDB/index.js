
const weaponDB = [
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

module.exports = { weaponDB }