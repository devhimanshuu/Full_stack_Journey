const mongoose = require("mongoose");
const User = require("../models/user").default;

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home");
}
module.exports = { handleUserSignUp };
