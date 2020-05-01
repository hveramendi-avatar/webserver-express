const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' })
            // res.write('Hola Mundo');
        let salida = {
            nombre: 'Ferando',
            edad: 40,
            url: req.url
        }
        res.write(JSON.stringify(salida))
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');