const express = require("express");

const app = express();

const reqFilter = require("./mwfile");
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("Welcome to Home page");
});
app.get("/users", reqFilter, (req, resp) => {
  resp.send("Welcome to User page");
});
route.get("/about", (req, resp) => {
  resp.send("Welcome to about page");
});
route.get("/contact", (req, resp) => {
  resp.send("Welcome to contact page");
});
app.use("/", route);
app.listen(5000);
