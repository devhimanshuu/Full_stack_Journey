/*Just like you handle get requests in Express with app.get method, you can use app.post method to handle post
requests.
But before you can handle POST requests, you will need to use the body-parser middleware. It simply parses the
body of POST, PUT, DELETE and other requests.
Body-Parser middleware parses the body of the request and turns it into an object available in req.body*/
var bodyParser = require("body-parser");
const express = require("express");
const app = express();
// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/post-data-here", function (req, res, next) {
  console.log(req.body); // req.body contains the parsed body of the request.
});
app.listen(8080, "localhost");
