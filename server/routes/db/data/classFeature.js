module.exports = [
  {
    "name": 'Ability Score Improvement',
    "classes": ['Barbarian', "Bard", "Cleric", "Druid"],
    "description": [
      'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.'
    ]
  },
  {
    "name": 'Bard College',
    "classes": ['Bard'],
    "description": [
      'At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.'
    ]
  },
  {
    "name": 'Bardic Inspiration(d6)',
    "classes": ['Bard'],
    "description": [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
      'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes ad8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
    ]
  },
  {
    "name": 'Bardic Inspiration(d8)',
    "classes": ['Bard'],
    "description": [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
      'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes ad8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
    ]
  },
  {
    "name": 'Bardic Inspiration(d10)',
    "classes": ['Bard'],
    "description": [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
      'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes ad8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
    ]
  },
  {
    "name": 'Bardic Inspiration(d12)',
    "classes": ['Bard'],
    "description": [
      'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.',
      'Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.',
      'You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.',
      'Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes ad8 at 5th level, a d10 at 10th level, and a d12 at 15th level.'
    ]
  },
  {
    "name": 'Channel Divinity',
    "classes": ['Cleric'],
    "description": [
      'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.',
      'When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.',
      'Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.',
      'Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.'
    ],
    choices: {
      choose: 0, // 0 means take all
      options: [
        {
          "name": 'Channel Divinity: Turn Undead',
          "classes": ['Cleric'],
          "description": [
            'As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
            'A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.'
          ],
        }
      ]
    }
  },
  {
    "name": 'College of Lore',
    "classes": ['Bard'],
    "description": [
      'Bards of the College of Lore know something about most things, collecting bits of knowledge from  sources as diverse as scholarly tomes and peasant  tales. Whether singing folk ballads in taverns or  elaborate compositions in royal courts, these bards  use their gifts to hold audiences spellbound. When  the applause dies down, the audience members  might find themselves questioning everything they  held to be true, from their faith in the priesthood of  the local temple to their loyalty to the king.',
      'The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.',
      'The college’s members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.'
    ],
    choices: {
      choose: 0, // 0 means take all
      options: [
        {
          "name": 'Bonus Proficiencies',
          "description": [
            'When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.'
          ],
          options: {
            choose: 3,
            type: 'Proficiency'
          }
        },
        {
          "name": 'Cutting Words',
          "description": [
            'Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being charmed.'
          ]
        },
        {
          "name": 'Additional Magical Secrets',
          "description": [
            'At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know.'
          ]
        },
        {
          "name": 'Peerless Skill',
          "description": [
            'Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail.'
          ]
        }
      ]
    }
  },
  {
    "name": 'Countercharm',
    "classes": ['Bard'],
    "description": [
      'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. Theperformance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).'
    ]
  },
  {
    "name": 'Danger Sense',
    "classes": ['Barbarian'],
    "description": [
      'At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.'
    ]
  },
  {
    "name": 'Destroy Undead',
    "classes": ['Cleric'],
    "description": [
      'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.'
    ]
  },
  {
    "name": 'Divine Domain',
    "classes": ['Cleric'],
    "description": [
      'Choose one domain related to your deity, such as Life. Each domain is detailed at the end of the class description, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.'
    ],
    choices: {
        choose: 0, // 0 means take all
        options: [
        {
          "name": 'Divine Domain Spells',
          "classes": ['Cleric'],
          "description": [
            'Each domain has a list of spells—its domain spells—that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you.'
          ]
        }
      ]
    }
  },
  {
    "name": 'Expertise',
    "classes": ['Bard'],
    "description": [
      'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
      'At 10th level, you can choose another two skill proficiencies to gain this benefit.'
    ]
  },
  {
    "name": 'Extra Attack',
    "classes": ['Barbarian'],
    "description": [
      'Beginning at 5th level, you can attack twice, instead  of once, whenever you take the Attack action on your turn.'
    ]
  },
  {
    "name": 'Fast Movement',
    "classes": ['Barbarian'],
    "description": [
      'Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.'
    ]
  },
  {
    "name": 'Font of Inspiration',
    "classes": ['Bard'],
    "description": [
      'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.'
    ]
  },
  {
    "name": 'Jack of All Trades',
    "classes": ['Bard'],
    "description": [
      'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus.'
    ]
  },
  {
    "name": 'Magical Secrets',
    "classes": ['Bard'],
    "description": [
      'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.',
      'The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.',
      'You learn two additional spells from any class at 14th level and again at 18th level.'
    ]
  },
  {
    "name": 'Path of the Berserker',
    "classes": ['Barbarian'],
    "description": [
      'For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being.'
    ],
    choices: {
      choose: 0, // 0 means take all
      options: [
        {
          "name": 'Frenzy',
          "description": [
            'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix PH-A).'
          ]
        },
        {
          "name": 'Mindless Rage',
          "description": [
            'Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.'
          ]
        },
        {
          "name": 'Intimidating Presence',
          "description": [
            'Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.',
            'If the creature succeeds on its saving throw, you can’t use this feature on that creature again for 24 hours.'
          ]
        },
        {
          "name": 'Retaliation',
          "description": [
            'Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.'
          ]
        }
      ]
    }
  },
  {
    "name": 'Primal Path',
    "classes": ['Barbarian'],
    "description": [
      'At 3rd level, you choose a path that shapes the  nature of your rage. Choose the Path of the  Berserker or the Path of the Totem Warrior, both  detailed at the end of the class description. Your  choice grants you features at 3rd level and again at  6th, 10th, and 14th levels.'
    ]
  },
  {
    "name": 'Rage',
    "classes": ['Barbarian'],
    "description": [
      'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor:',
      'You have advantage on Strength checks and Strength saving throws.',
      'When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.',
      'You have resistance to bludgeoning, piercing and slashing damage',
      'if you are able to cast spells, you can\'t cast them or concentrate on them while raging.',
      'Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.',
      'Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.'
    ]
  },
  {
    "name": 'Reckless Attack',
    "classes": ['Barbarian'],
    "description": [
      'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.'
    ]
  },
  {
    "name": 'Song of Rest(d6)',
    "classes": ['Bard'],
    "description": [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or moreHit Dice, each of those creatures regains an extra 1d6 hit points.',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
    ]
  },
  {
    "name": 'Song of Rest(d8)',
    "classes": ['Bard'],
    "description": [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or moreHit Dice, each of those creatures regains an extra 1d6 hit points.',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
    ]
  },
  {
    "name": 'Song of Restd(10)',
    "classes": ['Bard'],
    "description": [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or moreHit Dice, each of those creatures regains an extra 1d6 hit points.',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
    ]
  },
  {
    "name": 'Song of Rest(d12)',
    "classes": ['Bard'],
    "description": [
      'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or moreHit Dice, each of those creatures regains an extra 1d6 hit points.',
      'The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.'
    ]
  },
  {
    "name": 'Spellcasting: Bard',
    "classes": ['Bard'],
    "description": [
      'You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.',
      'Your spells are part of your vast repertoire, magic that you can tune to different situations.'
    ],
    choices: {
      choose: 0, // 0 means take all
      options: [
        {
          "name": 'Cantrips',
          "description": [
            'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.'
          ]
        },
        {
          "name": 'Spell Slots',
          "description": [
            'The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.',
            'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.'
          ]
        },
        {
          "name": 'Spells Known of 1st Level and Higher',
          "description": [
            'You know four 1st-level spells of your choice from the bard spell list.',
            'The Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
            'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.'
          ]
        },
        {
          "name": 'Spellcasting Ability',
          "description": [
            'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier'
          ]
        },
        {
          "name": 'Ritual Casting',
          "description": [
            'You can cast any bard spell you know as a ritual if that spell has the ritual tag.'
          ]
        },
        {
          "name": 'Spellcasting Focus',
          "description": [
            'You can use a musical instrument (see “Equipment”) as a spellcasting focus for your bard spells.'
          ]
        }
      ]
    }
  },
  {
    "name": 'Superior Inspiration',
    "classes": ['Bard'],
    "description": [
      'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.'
    ]
  },
  {
    "name": 'Unarmored Defense',
    "classes": ['Barbarian'],
    "description": [
      'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
    ]
  }
]