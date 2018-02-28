import React from 'react';

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

export const Option = ({ name }) => <option value={name}>{name}</option>;

export const ProficiencyBonus = level => Math.floor(level / 4) + 2;

export const getCheck = (obj, ...props) => {
  const val = obj[props[0]];
  if (props.length === 1 || !val) return val;
  const rest = props.slice(1);
  return getCheck.apply(null, [val, ...rest]);
};

export const isEmpty = obj => {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) return false;
  }
  
  return true;
}