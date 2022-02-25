var express = require('express');
var bodyParser = require('body-parser');

app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('index')
});

app.get('/about', function(req, res) {
    res.render('about')
});

app.post('/about', urlencodedParser, function(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('about');
});

app.get('/news/:id', function(req, res) {
    res.render('news', {newsId: req.params.id});
});

app.listen(3000, '45.62.212.21', () => console.log(`App has been started...`))
