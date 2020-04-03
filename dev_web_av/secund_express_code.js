const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  }
  res.setHeader('Content-Type','text/html');
  res.send('<h1>Acceuil</h1>');
).get('/page1', (req, res) =>{
  res.setHeader('Content-Type','text/html');
  res.send('<h1>Première page</h1>');
  }
).get('/page/:numpage', function(req, res) =>{
  res.setHeader('Content-Type','text/html');
  res.send('<h1>Première page</h1>');
}).
app.listen(port, hostname, () => {
  console.log('server running at http://${hostname}:${port}');
});
