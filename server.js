const express = require('express');
const app = express();
const hbs = require('hbs');
require('./services/helpers');
// Get port to use
const port = process.env.PORT || 3000;

// Include Node Modules
app.use('/node_modules', express.static('node_modules'));
// Include pages
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Route home
app.get('/', (req, res) => {

    res.render('home', {
        name: "roberto"
    });
});

// Route home
app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});