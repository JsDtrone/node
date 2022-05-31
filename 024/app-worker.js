// import { factorial } from './factorial.mjs';
const factorial = require('./factorial.js');
const { Worker } = require('worker_threads');

const compute = array => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: {
        array,
      },
    });

    worker.on('massage', msg => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on('error', err => {
      reject(err);
    });

    worker.on('exit', ext => {
      console.log('final');
    });
  });
};
const main = async () => {
  try {
    performance.mark('start');
    const result = await Promise.all([
      compute([21, 32, 45, 33, 50]),
      compute([21, 32, 45, 33, 50]),
      compute([21, 32, 45, 33, 50]),
      compute([21, 32, 45, 33, 50]),
      compute([21, 32, 45, 33, 50]),
    ]);
    console.log(result);

    performance.mark('end');
    performance.measure('mains', 'start', 'end');
    console.log(performance.getEntriesByName('mains').pop());
  } catch (e) {
    console.error(e);
  }
};

main();
