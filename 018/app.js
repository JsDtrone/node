// const start = performance.now();
// setTimeout(() => {
//   console.log(performance.now() - start);
//   console.log('one second');
// }, 1000);
//  таймеры не гарантируют точное время

// function myFM(a) {
//   console.log(`Argue =->  ${a}`);
// }
// setTimeout(myFM, 1500, 'class');
//                     |
//                   после указания времени любое количество аргументов
//                                                          (для функции)
// const timer = setTimeout(() => {
//   console.log('BOOOOOOOOOOOOOOOOOOOOOOOOOOM!');
// }, 5000);
// setTimeout(() => {
//   clearTimeout(timer);
//   console.log('has clean');
// }, 2000);
// const timer2 = setInterval(() => {
//   console.log(performance.now());
// }, 500);
// setTimeout(() => {
//   clearInterval(timer2);
//   console.log('has clean');
// }, 2000);

// console.log('before');
// setImmediate(() => {
//   console.log('last');
// });
// console.log('after');
const timerID = setTimeout(() => {
  console.log('BOOOOOOOOOOOOOOOOOOOOOOOOOOM!');
}, 5000);

timerID.unref(); // убрали ссылку на таймер
setImmediate(() => {
  timerID.ref();
});
