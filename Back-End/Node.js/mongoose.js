const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose
  .connect("url")
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));
// schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("hello from middleware-1");
  return res.json({ msg: "hello from middleware-1" });
  next();
});
app.use((req, res, next) => {
  console.log("hello from middleware-2");
  return res.json({ msg: "hello from middleware-2" });
  next();
});

//routers
app.get("/users", (req, res) => {
  const html = `<ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).json}
    </ul>`;
});
app.listen(5000);
