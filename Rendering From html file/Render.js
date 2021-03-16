var http = require('http');
var fs = require('fs');

//also showing JAVASCRIPT CLINET SIDE URL FACING....

http.createServer(function (req, res) {
  console.log('req ', req.url)
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8082);
