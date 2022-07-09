// http module introduction
const http = require('http');

// first parameter for the incoming requests
// second parameter for the server responses
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to the home page</a>
    `);
});

// set the port for the server
server.listen(5000);