const express = require("express");
// const name = "himanshu";
const app = express();

app.get("", (req, resp) => {
  console.log("data sent by browser>>>> Just to show the data sent by browser");
  resp.send(
    `<h1>Hello, This is Home page</h1><a href ="/about"> Go to About page</a>`
  );
});
app.get("/about", (req, resp) => {
  resp.send(`<input type ="text" placeholder ="Username"value="${req.query.name}"/>
  <button>Click Me</button><br/>
  <a href ="/"> Go back</a>`);
});
app.get("/help", (req, resp) => {
  resp.send({
    name: "Himanshu Gupta",
    Profession: "Engineer",
  });
});
app.listen(5000);
