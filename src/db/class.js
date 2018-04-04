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
    `, { className: name }).then(result => result.getClassName);
  } catch (err) {
    console.log("failed classNameQuery", err)
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
  }

  return result;
};