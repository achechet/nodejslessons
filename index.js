var express = require('express');

app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/about', function(req, res) {
    res.render('about')
});

app.get('/news/:id', function(req, res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(3000, '45.62.212.21');
console.log("Server started!")
