const { Router } = require("express");
const {
  addUser,
  getUsers,
  getAllUsers,
  removeUser,
  updateUser,
} = require("../controllers/userController");
const route = Router();

route.post("/user", addUser);
// http://localhost:3000/api/user/user
// method: post
// data as a query params

route.get("/user/:userid/:cityName", getUsers);
// http://localhost:3000/api/user/user/<id>/<city>
// method: get
// data as a path params

route.get("/allusers", getAllUsers);
//http://localhost:3000/api/user/allusers

route.delete("/user/:id", removeUser);
//http://localhost:3000/api/user/user/<id>

route.put("/user/:id", updateUser);
//http://localhost:3000/api/user/user/<id>
module.exports = route;
