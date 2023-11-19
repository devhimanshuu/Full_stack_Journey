// make a server
// creater a header and API body
// create an API with static data
// put data in another file

const http = require("http");
const data = require("./data");
http
  .createServer((req, resp) => {
    resp.writeHead(500, { "Content-Type": "applicationjson" });
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(7000);
