const http = require('http');
const fs = require('fs');

//TODO: your IP address on local network
const hostname = '192.168.1.10';
const port = 3000;

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html>' + fs.readFileSync(`${__dirname}/index.html`) + '</html>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
