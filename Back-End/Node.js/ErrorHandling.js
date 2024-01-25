/*In Express, you can define unified error handler for handling errors occurred in application. Define then handler at
the end of all routes and logic code.
*/
var express = require("express");
var app = express();
//GET /names/john
app.get("/names/:name", function (req, res, next) {
  if (req.params.name == "john") {
    return res.send("Valid Name");
  } else {
    next(new Error("Not valid name"));
  }
});
//error handler
app.use(function (err, req, res, next) {
  console.log(err.stack);
  //pass to error handler
  // e.g., Not valid name
  return res.status(500).send("Internal Server Occurred");
});
app.listen(3000);
