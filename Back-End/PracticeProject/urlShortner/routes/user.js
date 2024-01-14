const express = require("express");
const { handleUserSignUp } = require("../controllers/user");
const router = express.Router();

router.post("/", handleUserSignUp);

module.exports = router;
