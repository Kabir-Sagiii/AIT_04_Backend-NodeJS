const { Router } = require("express");
const {
  signin,
  signup,
  getAllUsers,
} = require("../controllers/userController.js");

const route = Router();

route.get("/users/:id", getAllUsers);
// http://localhost:4242/api/user/users/<data>

route.post("/sign-in", signin);
// http://localhost:4242/api/user/sign-in

route.post("/sign-up", signup);
// http://localhost:4242/api/user/sign-up

module.exports = route;
