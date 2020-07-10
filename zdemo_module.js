var http = require('http');
var dt = require('./zmodule');

http.createServer(function (req ,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello. date and time isn: '+ dt.myDateTIme());
    res.end();

}).listen(8080);