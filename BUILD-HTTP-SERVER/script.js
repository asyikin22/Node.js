//load HTTP module
const http = require('http');

const fs = require('fs');               //access index.html using fs

//Create a local server to receive data from
//pass a callback function, with 2 parameters (req, res)

const server = http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    try {
        const html = fs.readFileSync('index.html');
        res.write(html);
        res.end();
    } catch(e) {
        res.statusCode = 404;
        res.write("Bad request");
        console.log(e);
        res.end();
    } 
 })

//Specify a port number
const port = 3000;

server.listen(port, () => {
    console.log("Server running on " + port);
})