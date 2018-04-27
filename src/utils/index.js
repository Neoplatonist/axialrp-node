const isBrowser = typeof window !== 'undefined';
let localStorage;
isBrowser 
  ? localStorage = window.localStorage 
  : localStorage = storageMock();


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

 // Storage Mock
function storageMock() {
  const storage = {};

  return {
    setItem: (key, value) => {
      storage[key] = value || '';
    },

    getItem: key => {
      return key in storage ? storage[key] : null;
    },

    removeItem: key => {
      delete storage[key];
    },

    get length() {
      return Object.keys(storage).length;
    },

    key: i => {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}