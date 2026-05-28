const {
  getAllUsersDataFromCollection,
  removeUserFromCollection,
  getUsersFromDB,
  updateUserInCollection,
} = require("../models/userModel.js");

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

function removeUser(req, res) {
  const id = req.params.id;

  removeUserFromCollection(id)
    .then((data) => {
      res.send({ ok: true, result: "user removed" });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
}

function updateUser(req, res) {
  const id = req.params.id;
  const user = req.body;

  updateUserInCollection(id, user)
    .then((data) => {
      console.log(data);
      res.send({ ok: true, result: "user updated" });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
}

module.exports = { addUser, getUsers, getAllUsers, removeUser, updateUser };
