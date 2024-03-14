
//path
const path = require('node:path');

console.log(__filename);
console.log(__dirname);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//extension name
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//parse method
console.log(path.parse(__filename));

//format method
console.log(path.format(path.parse(__filename)));

//join method
console.log(path.join("folder1", "folder2", "index.html"));

