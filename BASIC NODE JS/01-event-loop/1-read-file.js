const { readFile, writeFile } = require('fs')

console.log('started a first task')

readFile('../content/sub-content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log('starting next task')

