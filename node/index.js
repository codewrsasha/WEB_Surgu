import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = '127.0.0.1';
const port = 3000;

async function response(req, res){
  const url = req.url;
  const method = req.method;
  console.log(`url: ${url}`);
  console.log(`method: ${method}`);

  let htmlFile = "";

  if (url === '/' && method === 'GET') {
    htmlFile = './main.html';
  } else if (url === '/second' && method === 'GET') {
    htmlFile = './second.html';
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
    return;
  }

  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Error reading file");
      return;
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    }
  });

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/html');
  // if (url === '/' && method === 'GET') {
    // res.end('<div class="mainpage">Main page</div>');
  // } else if (url === '/second' && method === 'GET') {
    // res.end('<div class="secondpage">Second page</div>');
  // } else {};
  
  //res.end('Hello World from Node.js server!');
};

const server = createServer(response);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});