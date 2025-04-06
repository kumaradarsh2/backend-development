// So to create an HTTP server, we need to get the HTTP module  
// So as we have learned so far, whenever we need a module, we need to 
// export it or we need to import (require) it

const http = require("node:http");

// createServer method from http module by http.createServer function
const server = http.createServer((req, res) => {
    console.log(req, "req");

    // the web page is continuously loading but nothing is happening and that's because we are 
    // not getting any response back from the server
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello node js from http module");

});

// Would everything we wrote so far work?
// No. Because the server we have created should 'listen' to a 'particular port' so that we are
// able to receive request and send response back

// So we need to create a connection (port) here 
const port = 3000;
server.listen(port, () => console.log(`Server is now listening to port ${port}`));