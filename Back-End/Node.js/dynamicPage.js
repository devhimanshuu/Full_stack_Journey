//how to use dynamic page in nodejs

const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.join(__dirname, "public");

app.set("view engine", "ejs"); //template Engine used here to know we are using template engine for node js

app.get("", (_, resp) => {
  resp.sendFile(`${publicpath}/index.html`);
});
app.get("/profile", (_, resp) => {
  const user = {
    name: "Himanshu gupta",
    email: "devhimanshuu@gmail.com",
    city: "Gwalior",
    skills: ["Cpp", "js", "php"],
  };
  resp.render("profile", { user });
});
app.get("/login", (_, resp) => {
  resp.render("login");
});
app.listen(5000);
