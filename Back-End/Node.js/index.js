//How to  make basic server on nodejs

/*    
     const http = require("http");
     http.createServer((req,resp))=>{
     resp.write("Hello, This is the Himanshu Gupta");
     resp.end();
     }).listen(4500);
*/

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const http = require("http");

// function dataControl(req, resp) {
//   resp.write("<h1>Hello, This is Himanshuu Gupta</h1>");
//   resp.end();
// }

// http.createServer(dataControl).listen(4500);
