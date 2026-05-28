const { Router } = require("express");
const {
  createAccount,
  login,
  createAccountUsingMongoose,
} = require("../controllers/authController.js");
const route = Router();

route.post("/sign-up", createAccountUsingMongoose);
// http://localhost:3000/api/auth/sign-up

route.post("/sign-in", login);
// http://localhost:3000/api/auth/sign-in
module.exports = route;
