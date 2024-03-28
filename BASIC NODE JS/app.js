// npm - globbal command comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

//package.json - manifest file(store important info about project/package)
//manual approach (create package.json in the root, create properties, etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

//convert items into flat arrays
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello baby')