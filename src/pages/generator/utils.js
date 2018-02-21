
export const Dice = (x, y) => {
  let z = 0;
  let die = [];

  do {
    // Math.floor(Math.random() * 100000) % x + 1
    die[z] = Math.ceil(Math.random() * x);
    z++;
    y--;
  } while(y > 0);

  return die;
};

export const AbilityModifier = x => Math.max(0,Math.floor((x - 10) / 2));

export const AbilityMap = [
  'Strength', 
  'Dexterity', 
  'Constitution', 
  'Intelligence', 
  'Wisdom', 
  'Charisma'
];

export const ProficiencyBonus = level => Math.floor(level / 4) + 2;