const express = require("express");
// const name = "himanshu";
const app = express();

app.get("", (req, resp) => {
  console.log("data sent by browser>>>> ", req.query.name);
  resp.send("hello ,This is Home page " + req.query.name);
});
app.get("/about", (req, resp) => {
  resp.send("Hello ,This is about page");
});
app.get("/help", (req, resp) => {
  resp.send("Hello, How can I help you ?");
});
app.listen(5000);
