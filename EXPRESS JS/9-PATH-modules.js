const path = require('path')

// separator = character used to separate directories and file names
console.log(path.sep)

const filePath = path.join('/content', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content', 'test.txt');
console.log(absolute)