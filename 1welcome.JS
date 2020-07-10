//For Dashboard
var http = require('http');

http.createServer(function (req ,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Authority !! Welcome to the  dashboard');

}).listen(8080);