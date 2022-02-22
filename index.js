var express = require('express');

app = express();

app.get('/', function(req, res) {
    res.send("Main page")
});

app.get('/about', function(req, res) {
    res.send("About page")
});

app.get('/news/:id', function(req, res) {
    res.send('ID is :' + req.params.id);
});

app.listen(3000, '127.0.0.1');
console.log("Server started!")
