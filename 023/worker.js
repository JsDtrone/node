const { parentPort, workerData } = require('worker_threads');
const factorial = require('./factorial.js');

const compute = ({ array }) => {
  const arr = [];
  for (let index = 0; index < 100000000; index++) {
    arr.push(index * index);
  }
  return array.map(el => factorial(el));
};
parentPort.postMessage(compute(workerData));
