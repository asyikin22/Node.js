const http = require ('http')

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Welcome')
})

const port = 5000;

server.listen(port, () => {
    console.log( `server is running on port ${port}`)
})

//Using event Emitter API
// const server = http.createServer()

// server.on('request', (req, res) => {
//     console.log('request')
//     res.end('Welcome')
// })

server.listen(5000)