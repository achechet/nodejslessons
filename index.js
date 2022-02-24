var express = require('express');

app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/about', function(req, res) {
    res.send("About page")
});

app.get('/news/:id', function(req, res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(3000, '127.0.0.1');
console.log("Server started!")
