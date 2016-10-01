var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('Recibí un request ' + request.url);

    function serveStaticFile(fileLocation, callback) {
        fs.readFile(fileLocation, null, function (err, data) {
            if (err) {
                callback(err);
            }

            callback(err, data.toString());
        });
    }

    function writeResponse(response, data) {
        response.writeHead(200, {'Content-Type': data.contentType});
        response.end(data.data);
    }

    switch (request.url) {
        case '/':
            serveStaticFile('./public/index.html', function (err, content) {
                writeResponse(response, {contentType: 'text/html', data: content})
            });
            break;
        case '/app.js':
            serveStaticFile('./public/app.js', function (err, content) {
                writeResponse(response, {contentType: 'text/html', data: content})
            });
            break;
        case '/app.css':
            serveStaticFile('./public/app.css', function (err, content) {
                writeResponse(response, {contentType: 'text/css', data: content})
            });
            break;
        default:
            response.end('');
            break;
    }
});

server.listen(3000, function () {
    console.log('servidor iniciado. escuchando en el puerto 3000');
});
