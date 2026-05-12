const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.send("Get Request Received, Processed...");
});
// http://localhost:4242/api/user/

route.get("/users", (req, res) => {
  res.send("users data is sending.......!!!!!!!");
});
// http://localhost:4242/api/user/users

module.exports = route;
