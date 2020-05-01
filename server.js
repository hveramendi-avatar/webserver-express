const express = require('express');
const app = express(); //producto de la funcion de express
const hbs = require('hbs');

//MIDDELWARE -- es una instruccion o un callback que se va ejecutar siempre, no importa que URL la persona pida
app.use(express.static(__dirname + '/public'))

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//usando helper
require('./hbs/helpers');

//variable puerto para heroku
const port = process.env.PORT || 8080;

//app.get('/'-- configurando una solicitud get cuando el pat sea /
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'GAA'
    });
});
//otro path
app.get('/about', (req, res) => {

    res.render('about');
});
app.listen(port, () => {
        console.log(`Escuchando el puerto ${ port} `);
    }) //tambien recibe un callback

//ejemplo con path
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });