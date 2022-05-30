let characters = [
  { name: 'Dena', sex: 'girl' },
  { name: 'Trystan', sex: 'girl' },
];

function changeSex(characters, owner) {
  return characters.map(c => {
    if (c.name == owner) {
      c.sex = 'man';
    } else {
      c.sex = 'girl';
    }
  });
}

module.exports = { characters, changeSex };
