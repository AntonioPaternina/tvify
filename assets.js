var fs = require('fs');

module.exports.serveStaticFile = function serveStaticFile(fileLocation, callback) {
    fs.readFile(fileLocation, null, function (err, data) {
        if (err) {
            callback(err);
        }

        callback(err, data.toString());
    });
};