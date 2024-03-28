// CommonJS, every file is module by default
//  Modules = Encapsulated Code
const names = require('./4-names')
console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
console.log(data)

require('./7-mind-grenade')

// sayHi("Asyikin")
// sayHi(names.Austin)
// sayHi(names.Liam)