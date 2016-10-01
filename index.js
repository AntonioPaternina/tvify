var assets = require('./assets.js');
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Recibí un request ' + request.url);

    function writeResponse(response, data) {
        response.writeHead(200, {'Content-Type': data.contentType});
        response.end(data.data);
    }

    function write404NotFound(response) {
        response.statusCode = 404;
        response.end('Asset not found');
    }

    switch (request.url) {
        case '/':
            assets.serveStaticFile('./public/index.html', function (err, content) {
                writeResponse(response, {contentType: 'text/html', data: content})
            });
            break;
        case '/app.js':
            assets.serveStaticFile('./public/app.js', function (err, content) {
                writeResponse(response, {contentType: 'text/html', data: content})
            });
            break;
        case '/app.css':
            assets.serveStaticFile('./public/app.css', function (err, content) {
                writeResponse(response, {contentType: 'text/css', data: content})
            });
            break;
        default:
            write404NotFound(response);
            break;
    }
});

server.listen(3000, function () {
    console.log('servidor iniciado. escuchando en el puerto 3000');
});
