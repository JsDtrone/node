// import { factorial } from './factorial.mjs';
const factorial = require('./factorial.js');

const compute = arr => {
  const array = [];
  for (let index = 0; index < 100000000; index++) {
    array.push(index * index);
  }
  return arr.map(e => factorial(e));
};
const main = () => {
  performance.mark('start');
  const result = [
    compute([21, 32, 45, 33, 50]),
    compute([21, 32, 45, 33, 50]),
    compute([21, 32, 45, 33, 50]),
    compute([21, 32, 45, 33, 50]),
    compute([21, 32, 45, 33, 50]),
  ];
  console.log(result);
  performance.mark('end');
  performance.measure('main', 'start', 'end');
  console.log(performance.getEntriesByName('main').pop());
};

main([1, 0]);
