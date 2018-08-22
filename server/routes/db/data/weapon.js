module.exports = [
  {
    'name': 'Club',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 1,
      'unit': 'sp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Light'
      }
    ]
  }, {
    'name': 'Dagger',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'type': 'throw attack',
          'normal': 20,
          'long': 60
        }
      ],
    },
    'cost': {
      'quantity': 2,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Piercing'
      }
    ],
    'weight': 1,
    'properties': [
      {
        'name': 'Finesse'
      }, {
        'name': 'Light'
    }, {
        'name': 'Thrown'
      }
    ]
  }, {
    'name': 'Greatclub',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 2,
      'unit': 'sp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 10,
    'properties': [
      {
        'name': 'Two-Handed'
      }
    ]
  }, {  
    'name': 'Handaxe',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'type': 'throw attack',
          'normal': 20,
          'long': 60
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 6,
        'type': 'Slashing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Light'
      }, {
        'name': 'Thrown'
      }, {
        'name': 'Monk'
      }
    ]
  }, {
    'name': 'Javelin',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'type': 'throw attack',
          'normal': 30,
          'long': 120
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'sp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 6,
        'type': 'Piercing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Thrown'
      } 
    ]
  }, {
    'name': 'Light Hammer',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'type': 'throw attack',
          'normal': 20,
          'long': 60
        }
      ],
    },
    'cost': {
      'quantity': 2,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Light'
      }, {
        'name': 'Thrown'
      }, {
      'name': 'Monk'
      }
    ]
  }, {
    'name': 'Mace',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 6,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 4,
    'properties': [
      {
        'name': 'Monk'
      }
    ]
  }, {  
    'name': 'Quarterstaff',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 2,
      'unit': 'sp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 6,
        'type': 'Bludgeoning'
      }, {
        'name': 'two handed',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Bludgeoning'
      },
    ],
    'weight': 4,
    'properties': [
      {
        'name': 'Versatile'
      } 
    ]
  }, {
    'name': 'Sickle',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 1,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Slashing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Light'
      }
    ]
  }, {
    'name': 'Spear',
    'category': 'Simple',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'type': 'throw attack',
          'normal': 20,
          'long': 60
        }
      ],
    },
    'cost': {
      'quantity': 1,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Piercing'
      }, {
        'name': 'two handed',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 3,
    'properties': [
      {
        'name': 'Thrown'
      }, {
        'name': 'Versatile'
      }, {
        'name': 'Monk'
      }
    ]
  }, {
    'name': 'Crossbow, light',
    'category': 'Simple',
    'range': {
      'name': 'Ranged',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 25,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 5,
    'properties': [
      {
        'name': 'Ammunition'
      }, {
        'name': 'Loading'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Dart',
    'category': 'Simple',
    'range': {
      'name': 'Ranged',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }, {
          'name': 'throw attack',
          'normal': 20,
          'long': 60
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'cp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Piercing'
      }
    ],
    'weight': 0.25,
    'properties': [
      {
        'name': 'Finesse'
      }, {
        'name': 'Thrown'
      } 
    ],
    
  }, {
    'name': 'Shortbow',
    'category': 'Simple',
    'range': {
      'name': 'Ranged',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 25,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 6,
        'type': 'Piercing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Ammunition'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Sling',
    'category': 'Simple',
    'range': {
      'name': 'Ranged',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 1,
      'unit': 'sp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 4,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 0,
    'properties': [
      {
        'name': 'Ammunition'
      }
    ]
  }, {  
    'name': 'Battleaxe',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Slashing'
      }, {
        'name': 'twoHandsDamage',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Slashing'
      }
    ],
    'weight': 4,
    'properties': [
      {
        'name': 'Versatile'
      }
    ]
  }, {
    'name': 'Flail',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Bludgeoning'
      }
    ],
    'weight': 2,
    'properties': [] 
  }, {
    'name': 'Glaive',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 20,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Slashing'
      }
    ],
    'weight': 6,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Reach'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Greataxe',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 30,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 12,
        'type': 'Slashing'
      }
    ],
    'weight': 7,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Greatsword',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 50,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 2,
        'diceValue': 6,
        'type': 'Slashing'
      }
    ],
    'weight': 6,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Halberd',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 20,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Slashing'
      }
    ],
    'weight': 6,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Reach'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Lance',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 12,
        'type': 'Piercing'
      }
    ],
    'weight': 6,
    'properties': [
      {
        'name': 'Reach'
      }, {
        'name': 'Special'
      } 
    ],
    'special': 'You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you arenâ€™t mounted.'
  }, {
    'name': 'Longsword',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 15,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Slashing'
      }, {
        'name': 'two handed',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Slashing'
      }
    ],
    'weight': 3,
    'properties': [
      {
        'name': 'Versatile'
      }
    ]
  }, {
    'name': 'Maul',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 2,
      'diceValue': 6,
      'type': 'Bludgeoning'
    },
    'weight': 10,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Morningstar',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 15,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 4,
    'properties': [] 
  }, {
    'name': 'Pike',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Piercing'
      }
    ],
    'weight': 18,
    'properties': [
      {
        'name': 'Heavy'
      }, {
        'name': 'Reach'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Rapier',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 25,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Finesse'
      }
    ]
  }, {  
    'name': 'Scimitar',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 25,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 6,
      'type': 'Slashing'
    },
    'weight': 3,
    'properties': [
      {
        'name': 'Finesse'
      }, {
        'name': 'Light'
      }
    ]
  }, {
    'name': 'Shortsword',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 6,
      'type': 'Piercing'
    },
    'weight': 2,
    'properties': [
      {
        'name': 'Finesse'
      }, {
        'name': 'Light'
      }, {
        'name': 'Monk'
      }
    ]
  }, {
    'name': 'Trident',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 6,
      'type': 'Slashing'
    },
    'weight': 4,
    'properties': [
      {
        'name': 'Thrown'
      }, {
        'name': 'Versatile'
      }
    ],
    'throwAtkRange': {
      'normal': 20,
      'long': 60
    }
  }, {
    'name': 'War pick',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 5,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 2,
    'properties': [] 
  }, {
    'name': 'Warhammer',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 15,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 8,
      'type': 'Bludgeoning'
    },
    'weight': 2,
    'properties': [
      {
        'name': 'Versatile'
      }
    ],
    'twoHandsDamage': {
      'diceCount': 1,
      'diceValue': 10,
      'type': 'Bludgeoning'
    }
  }, {
    'name': 'Whip',
    'category': 'Martial',
    'range': {
      'name': 'Melee',
      'rangeType': [
        {
          'type': 'attack',
          'normal': 5,
          'long': null
        }
      ],
    },
    'cost': {
      'quantity': 2,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 4,
      'type': 'Slashing'
    },
    'weight': 3,
    'properties': [
      {
        'name': 'Finesse'
      }, {
        'name': 'Reach'
      }
    ]
  }, {
    'name': 'Blowgun',
    'category': 'Martial',
    'range': 'Ranged',
    'cost': {
      'quantity': 10,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 1,
      'type': 'Piercing'
    },
    'weight': 1,
    'properties': [
      {
        'name': 'Ammunition',
      }, {
        'name': 'Loading',
      }
    ]
  }, {
    'name': 'Crossbow, hand',
    'category': 'Martial',
    'range': 'Ranged',
    'cost': {
      'quantity': 75,
      'unit': 'gp'
    },
    'damage': {
      'diceCount': 1,
      'diceValue': 6,
      'type': 'Piercing'
    },
    'weight': 3,
    'properties': [
      {
        'name': 'Ammunition',
      }, {
        'name': 'Light'
      }, {
        'name': 'Loading',
      }
    ]
  }, {
    'name': 'Crossbow, heavy',
    'category': 'Martial',
    'range': 'Ranged',
    'cost': {
      'quantity': 50,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 10,
        'type': 'Piercing'
      }
    ],
    'weight': 18,
    'properties': [
      {
        'name': 'Ammunition',
      }, {
        'name': 'Light'
      }, {
        'name': 'Loading',
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Longbow',
    'category': 'Martial',
    'range': 'Ranged',
    'cost': {
      'quantity': 50,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 8,
        'type': 'Piercing'
      }
    ],
    'weight': 2,
    'properties': [
      {
        'name': 'Ammunition',
      }, {
        'name': 'Heavy'
      }, {
        'name': 'Two-Handed'
      }
    ]
  }, {
    'name': 'Net',
    'category': 'Martial',
    'range': 'Ranged',
    'cost': {
      'quantity': 1,
      'unit': 'gp'
    },
    'damage': [
      {
        'name': 'standard',
        'diceCount': 1,
        'diceValue': 0,
        'type': 'Slashing'
      }
    ],
    'weight': 3,
    'properties': [
      {
        'name': 'Thrown'
      }, {
        'name': 'Special'
      } 
    ],
    'special': 'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.',
    'throwAtkRange': {
      'normal': 5,
      'long': 15
    }
  }
]