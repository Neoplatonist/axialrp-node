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
    console.log('cache error:', err);
    data = await query(input);
    store(key, [data]);
  }

  const item = data.find(v => v.name === input);

  if (!err && item == undefined) {
    const queryInput = await query(input)
    data.push(queryInput);
    store(key, data);
    data = queryInput;
  } else {
    data = item;
  }

  return data;
};