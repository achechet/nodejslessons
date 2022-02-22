var http = require('http');

var server = http.createServer(function(req, res) {
    console.log("URL страницы " + req.url);
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
    res.end('Привет мир!');
});

server.listen(3000, '127.0.0.1');
console.log("Server started!")
