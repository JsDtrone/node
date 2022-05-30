const { characters, changeSex } = require('./characters.js');

let meCharns = characters;

meCharns = changeSex(characters, 'Dena');

for (const c of characters) {
  console.log(c);
}
