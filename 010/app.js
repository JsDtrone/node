fs = require('fs');
const data = fs.readFileSync('./dataread.txt');
console.log(data.toString());
