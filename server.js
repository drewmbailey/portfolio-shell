// server.js - minimal Next.js server for cPanel/Passenger
const { createServer } = require('http');
const next = require('next');

const dev = false;
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    console.log(`Next.js running on http://${hostname}:${port}`);
  });
});
