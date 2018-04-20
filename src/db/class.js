import { client } from './index';

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
      features
      proficiency_bonus
      spells_known
      type
    }
    _2 {
      features
      proficiency_bonus
      spells_known
      type
    }
    _3 {
      features
      proficiency_bonus
      spells_known
      type
    }
    _4 {
      features
      proficiency_bonus
      spells_known
      type
    }
    _5 {
      features
      proficiency_bonus
      spells_known
      type
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
    console.log("failed classNameQuery", err)
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
    console.log("failed classQuery", err)
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
    console.log("failed classQuery", err)
    result = Promise.reject(err);
  }

  return result;
};