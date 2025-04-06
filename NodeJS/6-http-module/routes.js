const http = require("node:http");

const server = http.createServer((req, res) => {
    // the request object will give us request.url  
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("This is my homepage");
    } else if (url === "/about") {
        res.writeHead(404, {"content-type": "text/plain"});
        res.end("This page can't be found");
    }
});

const port = 3000;
server.listen(port, () => console.log(`Server is now listening to port ${port}`));