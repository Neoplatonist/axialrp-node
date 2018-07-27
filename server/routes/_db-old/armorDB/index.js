
const armorDB = [
  {
    name: 'Padded',
    category: 'Light',
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
    category: 'Light',
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
    category: 'Light',
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
    category: 'Medium',
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
    category: 'Medium',
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
    category: 'Medium',
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
    category: 'Medium',
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
    category: 'Medium',
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
    category: 'Heavy',
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
    category: 'Heavy',
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
    category: 'Heavy',
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
    category: 'Heavy',
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
    category: 'Shield',
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

module.exports = { armorDB }