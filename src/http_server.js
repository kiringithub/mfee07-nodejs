const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
       'Content-Type': 'text/html'
    });
    res.end(`<h2>${req.url}</h2><h3>testing</h3>`)

});

server.listen(3000);
