const {
  addUserInCollection,
  checkUserIsValid,
} = require("../models/authModel");

function createAccount(req, res) {
  const user = req.body;
  addUserInCollection(user)
    .then((resData) => {
      res.send({ ok: true, message: "user account created", data: resData });
    })
    .catch((error) => {
      res.send({ ok: false, error: error });
    });
}

function login(req, res) {
  const credentials = req.body;
  checkUserIsValid(credentials)
    .then((data) => {
      console.log(data);
      if (data.password === credentials.password) {
        res.send({ ok: true, user: data, message: "Valid User" });
      } else {
        res.send({ ok: false, message: "password is Incorrect" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, message: "Invalid User", error: error });
    });
}

module.exports = { createAccount, login };
