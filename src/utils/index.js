const localStorage = window.localStorage;

const check = key => {
  const data = JSON.parse(localStorage.getItem(key));
  let err = '';

  if (!data) {
    err = 'no data found';
  }

  return {data, err};
};

const store = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const cache = async (key, query, input) => {
  let {data, err} = check(key);
  if (err) {
    if (input) {
      data = await query(input);
      store(key, [data]);
      return data;
    } else {
      data = await query();
      store(key, data);
      return data;
    }
  }

  if (input != undefined) {
    const item = data.find(v => v.name === input);

    if (item == undefined) {
      const queryInput = await query(input);

      data.push(queryInput);
      store(key, data);
      return queryInput;
    }

    return item;
  }

  return data;
};

