var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Recibí un request ' + request.url);

    switch (request.url) {
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('./public/index.html', function (err, data) {
                response.end(data);
            })
            break;
        case '/app.js':
            response.writeHead(200, {'Content-Type': 'application/javascript'});
            fs.readFile('./public/app.js', function (err, data) {
                response.end(data);
            })
            break;
        case '/app.css':
            response.writeHead(200, {'Content-Type': 'text/css'});
            fs.readFile('./public/app.css', function (err, data) {
                response.end(data);
            })
            break;
        default:
            response.end('');
            break;
    }
});

server.listen(3000, function () {
    console.log('servidor iniciado. escuchando en el puerto 3000');
});
