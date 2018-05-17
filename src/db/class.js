import { client } from './index';

const classLevels = `
  cantrips
  features
  invocations_known
  ki_points
  martial_arts
  proficiency_bonus
  rages
  rage_damage
  sneak_attack
  sorcery_points
  slot_level
  spells_known
  spell_slots
  type
  unarmored_movement
`;

const classType = `
  name
  hit_die
  armor {
    name
  }
  proficiency_choices {
    choose
    type
    from {
      name
    }
  }
  saving_throws {
    name
  }
  sub_classes {
    name
    description
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
      query getClassNameNow($className: String) {
        getClassName(name: $className) {
          ${classType}
        }
      }
    `, { className: name })
      .then(result => result.getClassName)
      .then(fix => {
        const spellcasting = Object.keys(fix.spellcasting)
          .reduce((a, v) => {
            a[parseInt(v.substr(1), 10)] = fix.spellcasting[v];

            return a;
          }, {});
        
        return Object.assign(fix, { spellcasting });
      })
      .then(fixed => {
        const levels = Object.keys(fixed.levels)
          .reduce((a, v) => {
            a[parseInt(v.substr(1), 10)] = fixed.levels[v];

            return a;
          }, {});
        
        return Object.assign(fixed, { levels });
      });
  } catch (err) {
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