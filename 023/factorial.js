// export function Factorial(num) {
//   if (num == 1 || num == 0) {
//     return 1;
//   }
//   return Factorial(num - 1) * num;
// }
module.exports = function factorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return factorial(num - 1) * num;
};
