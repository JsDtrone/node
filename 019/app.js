const fs = require('fs');

console.log('imit');

setTimeout(() => {
  console.log(performance.now(), 'Timer 0');
}, 100);

setImmediate(() => {
  console.log('set imidiat');
});

fs.readFile(__filename, () => {
  console.log('has rided');
});
setTimeout(() => {
  for (let i = 0; i < 100000; i++) {}
  console.log('lpw');
  Promise.resolve().then(() => {
    console.log('promise T');
  });
});

Promise.resolve().then(() => {
  console.log('promise');
});
process.nextTick(() => {
  console.log('tick');
});
console.log('final');
