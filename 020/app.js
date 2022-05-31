const a = 8;
function b() {
  return c();
}
function c() {
  return d();
}
function d() {
  console.log(a);
}
setTimeout(() => {
  console.log('TIMEOUT');
}, 1000);
b();
