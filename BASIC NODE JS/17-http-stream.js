const http = require ('http')

const fs = require('fs')

http.createServer (function (req, res) {
        // fs.readFile('./content/big.txt', 'utf-8', function(err, data) {})
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    }).listen(5000)
