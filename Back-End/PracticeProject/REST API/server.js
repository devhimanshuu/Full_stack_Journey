const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/subusers", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("error", () => console.error("Connected to Database"));

app.listen(3000, () => console.log("Hey this server is made by himanshu "));
