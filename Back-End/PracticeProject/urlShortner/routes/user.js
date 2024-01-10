const express = require("express");
const { handleUserSignUp } = require("../controllers/user");
const router = express.router();

router.post("/", handleUserSignUp);

module.exports = router;
