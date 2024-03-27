const { readFile, writeFile } = require('fs')

//callback function for second argument

readFile('./content/sub-content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/sub-content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`
        ,(err, result) => {
            if(err) {
              console.log(err);
              return;  
            }
            console.log(result)
        })
    })
})