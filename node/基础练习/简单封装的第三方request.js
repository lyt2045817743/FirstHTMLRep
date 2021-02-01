const request = require('request');
function http(url) {
    request(url, function(err, res, body) {
        console.log(body);
    })
}
module.exports = http;