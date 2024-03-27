// read file = read contents of file
// write file = create new file

const { readFileSync, writeFileSync, read } = require('fs');
console.log('start');
const first = readFileSync('./content/sub-content/first.txt', 'utf8');
const second = readFileSync('./content/sub-content/second.txt', 'utf8');
console.log(first, second)


//the first parameter is the name of the file that we want to create
//second parameter is the content of the file
writeFileSync('./content/result-sync.txt', 
`Here is the result : ${first}, ${second}`
)

const third = readFileSync('./content/result-sync.txt', 'utf8');
console.log(third);

console.log('done with this');
console.log('starting the next one');

