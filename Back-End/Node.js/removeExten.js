// how to remove extension of file which will render on our website

//use get and sendfile function

const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.join(__dirname, "public");

app.get("", (_, resp) => {
  resp.sendFile(`${publicpath}/index.html`); // render index html file
});
app.get("/about", (_, resp) => {
  resp.sendFile(`${publicpath}/about.html`); // render about html file
});
app.get("/help", (_, resp) => {
  resp.sendFile(`${publicpath}/help.html`); //render help html file
});
app.get("*", (_, resp) => {
  resp.sendFile(`${publicpath}/nopage.html`); // render nopage html file when we call the page which don't exist(404 page)
});
app.listen(5000);
