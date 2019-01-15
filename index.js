var express = require('express');
var app = express();

var hbs = require('hbs');


app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});