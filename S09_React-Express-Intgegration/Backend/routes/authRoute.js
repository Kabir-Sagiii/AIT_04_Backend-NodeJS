const { Router } = require("express");
const { createAccount } = require("../controllers/authController.js");
const route = Router();

route.post("/sign-up", createAccount);
// http://localhost:3000/api/auth/sign-up

module.exports = route;
