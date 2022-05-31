const perf_hooks = require('perf_hooks');

const performanceObserver = new perf_hooks.PerformanceObserver(
  (items, observer) => {
    console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}:${entry.duration}`);
    observer.disconnect();
  }
);
performanceObserver.observe({ entryTypes: ['measure', 'function'] });

test = perf_hooks.performance.timerify(test);
function test(params) {
  const arr = [];
  for (let index = 0; index < 100000; index++) {
    arr.push(index ** 2);
  }
}

test();

function slow() {
  performance.mark('start');
  const arr = [];
  for (let index = 0; index < 100000; index++) {
    arr.push(index ** 2);
  }
  performance.mark('end');
}
slow();
performance.measure('slow', 'start', 'end');
console.log(performance.getEntriesByName('slow'));
