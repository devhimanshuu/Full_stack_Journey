// In Express, you can define middlewares that can be used for checking requests or setting some headers in
// response.
app.use(function (req, res, next) {}); // signature
Example;
// The following code adds user to the request object and pass the control to the next matching route.
var express = require("express");
var app = express();
//each request will pass through it
app.use(function (req, res, next) {
  req.user = "testuser";
  next(); // it will pass the control to next matching route
});
app.get("/", function (req, res) {
  var user = req.user;
  console.log(user); // testuser
  return res.send(user);
});
app.listen(3000);
