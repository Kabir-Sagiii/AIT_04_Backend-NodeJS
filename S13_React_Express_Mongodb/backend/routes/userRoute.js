const { Router } = require("express");
const { addUser, getUsers } = require("../controllers/userController");
const route = Router();

route.post("/user", addUser);
// http://localhost:3000/api/user/user
// method: post
// data as a query params

route.get("/user/:userid/:cityName", getUsers);
// http://localhost:3000/api/user/user/<id>/<city>
// method: get
// data as a path params

module.exports = route;
