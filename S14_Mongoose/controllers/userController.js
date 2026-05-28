const { getUsersFromDB } = require("../models/userModel");
const { getAllUsersDataFromCollection } = require("../models/userModel.js");

function addUser(req, res) {
  const data = req.query.city;
  console.log("user", data);
  res.send("working....!!!!!!!!!");
}

function getUsers(req, res) {
  // const data = req.params;
  // console.log(data.userid, data.cityName);
  // res.send("Path Params Received");

  getUsersFromDB("users")
    .then((data) => {
      res.send({ ok: true, result: data, message: "Able to fetch the data" });
    })
    .catch(() => {
      res.send({ ok: false, result: error, message: "failed to access data" });
    });
}

function getAllUsers(req, res) {
  getAllUsersDataFromCollection()
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
}

module.exports = { addUser, getUsers, getAllUsers };
