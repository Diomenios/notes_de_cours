const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  var page = url.parse(req.url).pathname;
  console.log(page);
  if(page == '\toto'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/thml');
    res.end(<html><h1>Hello Toto</h1></html>);

  }
  else if (page == \tartempion) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/thml');
    res.end(<html><h1>Hello Tartempion</h1></html>);
  }
  else{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/thml');
    res.end(<html><h1>Hello World</h1></html>);
  }
});

server.listen(port, hostname, () =>{
console.log('server running at : http://${hostname} : $(port)');
});
