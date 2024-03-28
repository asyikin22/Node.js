const http = require('http');

console.log('Server is running on port 5000')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to my website')
    } else if (req.url === '/about') {
        res.end('Here is out short history')
    } else {
        res.end(`
            <h1> Oops! </h1>
            <p>We can't seem to find the page you're looking for!</p>
            <a href="/">back home</a>
            `)
    }
});

server.listen(5000)