import { client } from './index';

const classLevels = `
  cantrips
  features
  invocationsKnown
  kiPoints
  martialArts
  proficiencyBonus
  rages
  rageDamage
  sneakAttack
  sorceryPoints
  slotLevel
  spellsKnown
  spellSlots
  type
  unarmoredMovement
`;

const classType = `
  name
  hitDie
  armor {
    name
  }
  proficiencyChoices {
    choose
    type
    from {
      name
    }
  }
  savingThrows {
    name
  }
  subClasses {
    name
    description
  }
  startingEquipment {
    class
  }
  levels {
    _1 {
      ${classLevels}
    }
    _2 {
      ${classLevels}
    }
    _3 {
      ${classLevels}
    }
    _4 {
      ${classLevels}
    }
    _5 {
      ${classLevels}
    }
    _6 {
      ${classLevels}
    }
    _7 {
      ${classLevels}
    }
    _8 {
      ${classLevels}
    }
    _9 {
      ${classLevels}
    }
    _10 {
      ${classLevels}
    }
    _11 {
      ${classLevels}
    }
    _12 {
      ${classLevels}
    }
    _13 {
      ${classLevels}
    }
    _14 {
      ${classLevels}
    }
    _15 {
      ${classLevels}
    }
    _16 {
      ${classLevels}
    }
    _17 {
      ${classLevels}
    }
    _18 {
      ${classLevels}
    }
    _19 {
      ${classLevels}
    }
    _20 {
      ${classLevels}
    }
  }
  spellcasting {
    _0
    _1
    _2
    _3
    _4
    _5
    _6
    _7
    _8
    _9
  }
  weapons {
    name
  }
`;

export const classNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getClassNameNow($className: String!) {
        getClassesByName(name: $className) {
          ${classType}
        }
      }
    `, { className: name })
      .then(result => result.getClassesByName)
      .then(fixed => { // Fixes levels _1-_20 to 1-20
        const levels = Object.keys(fixed.levels)
          .reduce((a, v) => {
            a[parseInt(v.substr(1), 10)] = fixed.levels[v];

            return a;
          }, {});

        return Object.assign(fixed, { levels });
      })
      .then(fix => { // Fixes spellcasting _1-_9 to 1-9
        const spellcasting = Object.keys(fix.spellcasting)
          .reduce((a, v) => {
            a[parseInt(v.substr(1), 10)] = fix.spellcasting[v];

            return a;
          }, {});
        
        return Object.assign(fix, { spellcasting });
      });
  } catch (err) {
    console.log(err)
    result = Promise.reject(err);
  }

  return result;
};

export const classAllNamesQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getClasses {
          name
        }
      }
    `).then(result => result.getClasses);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const classQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getClasses {
          ${classType}
        }
      }
    `).then(result => result.getClasses);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};