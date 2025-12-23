import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    method: req.method,
    url: req.url
  }));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});