const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/subusers", { useNewUrlParser: true });
const db = mongoose.connection;

app.listen(3000, () => console.log("hey this server is made by himanshu "));
