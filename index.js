const add = require('./add.js');

const firstName = "Nur"
const lastName = "Asyikin"

//template string by using backtick
const greeting = `hello, my name is ${firstName} ${lastName}`

console.log(greeting);

const sum = add(7,8);
const sum2 = add(1,2);
console.log(sum);
console.log(sum2);
