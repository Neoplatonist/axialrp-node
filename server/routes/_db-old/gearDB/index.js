
const gearDB = [
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
    description: ['As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon.', 'On a hit, the target takes 2d6 acid damage.']
  }, {
    name: 'Alchemist’s fire (flask)',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    description: ['This sticky, adhesive fluid ignites when exposed to air.', 'As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist’s fire as an improvised weapon.', 'On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.'],
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
    description: ['A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.', 'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.']
  }, {
    name: 'Antitoxin (vial)',
    category: 'Standard Gear',
    cost: {
      quantity: 50,
      unit: 'gp'
    },
    weight: 0,
    description: ['A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.']
  }, {
    name: 'Crystal',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    description: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Orb',
    category: 'Arcane focus',
    cost: {
      quantity: 20,
      unit: 'gp'
    },
    weight: 3,
    description: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Rod',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 2,
    description: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Staff',
    category: 'Arcane focus',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 4,
    description: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
  }, {
    name: 'Wand',
    category: 'Arcane focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    description: ['An arcane focus is a special item— an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item— designed to channel the power of arcane spells. A sorcerer, warlock, or wizard can use such an item as a spellcasting focus.']
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
    description: ['As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side.', 'A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone.', 'A creature moving through the area at half speed doesn’t need to make the save.']
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
    description: ['A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.']
  }, {
    name: 'Book',
    category: 'Standard Gear',
    cost: {
      quantity: 25,
      unit: 'gp'
    },
    weight: 5,
    description: ['A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later in this section).']
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
    description: ['As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side.', 'Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage.', 'Taking this damage reduces the creature’s walking speed by 10 feet until the creature regains at least 1 hit point.', 'A creature moving through the area at half speed doesn’t need to make the save.']
  }, {
    name: 'Candle',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'cp'
    },
    weight: 0,
    description: ['For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.']
  }, {
    name: 'Case, crossbow bolt',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 1,
    description: ['This wooden case can hold up to twenty crossbow bolts.']
  }, {
    name: 'Case, map or scroll',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 1,
    description: ['This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.']
  }, {
    name: 'Chain (10 feet)',
    category: 'Standard Gear',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 10,
    description: ['A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.']
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
    description: [' A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell’s description).']
  }, {
    name: 'Crowbar',
    category: 'Standard Gear',
    cost: {
      quantity: 2,
      unit: 'gp'
    },
    weight: 5,
    description: ['Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied.']
  }, {
    name: 'Sprig of mistletoe',
    category: 'Druidic focus',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0,
    description: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Totem',
    category: 'Druidic focus',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 0,
    description: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Wooden staff',
    category: 'Druidic focus',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 4,
    description: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Yew wand',
    category: 'Druidic focus',
    cost: {
      quantity: 10,
      unit: 'gp'
    },
    weight: 1,
    description: ['A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporating feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.']
  }, {
    name: 'Emblem',
    category: 'Holy Symbol',
    cost: {
      quantity: 5,
      unit: 'gp'
    },
    weight: 0,
    description: ['A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic.', 'Appendix B lists the symbols commonly associated with many gods in the multiverse. A cleric or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.']
  }, {
    name: 'Fishing tackle',
    category: 'Standard Gear',
    cost: {
      quantity: 1,
      unit: 'gp'
    },
    weight: 4,
    description: ['This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.']
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
    description: ['As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon.', 'If the target is a fiend or undead, it takes 2d6 radiant damage.', 'A cleric or paladin may create holy water by performing a special ritual.', 'The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.']
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
    description: ['When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground.', 'A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long).', 'A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.'],
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
]

module.exports = { gearDB }