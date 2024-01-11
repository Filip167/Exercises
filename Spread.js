1.
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


2.
const findMin = (...args) => Math.min(...args);

3.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

4.
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

5. 
5.1
const removeRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

5.2
const extend = (array1, array2) => [...array1, ...array2];

5.3
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

5.4
const removeKey = (obj, key) => {
  const { [key]: removedKey, ...rest } = obj;
  return rest;
};

5.5
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

5.6
const update = (obj, key, val) => ({ ...obj, [key]: val });


 
