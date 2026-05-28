const { Router } = require("express");
const { addUser } = require("../controllers/userController");
const route = Router();

route.post("/user", addUser);
// http://localhost:3000/api/users/user
// method: post
// data as a query params

module.exports = route;
