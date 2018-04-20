import { client } from './index';

const skillType = `
  name
  description
  ability_score {
    name
  }
`;

export const skillNameQuery = async name => {
  let result;

  try {
    result = await client.query(`
      query getSkillNameNow($skill: String) {
        getSkillName(name: $skill) {
          ${skillType}
        }
      }
    `, { skill: name }).then(result => result.getSkillName);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};


export const skillQuery = async () => {
  let result;

  try {
    result = await client.query(`
      {
        getSkills {
          ${skillType}
        }
      }
    `).then(result => result.getSkills);
  } catch (err) {
    result = Promise.reject(err);
  }

  return result;
};