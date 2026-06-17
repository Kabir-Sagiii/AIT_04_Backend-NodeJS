const {
  addUserInCollection,
  checkUserIsValid,
  addUserWithMongoose,
} = require("../models/authModel");
const { createToken } = require("../middleware/authentication.js");

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

function createAccountUsingMongoose(req, res) {
  addUserWithMongoose(req.body)
    .then((data) => {
      console.log(data);
      res.send({ ok: true, result: "User Created" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, error: error });
    });
}

function login(req, res) {
  const credentials = req.body;
  checkUserIsValid(credentials)
    .then((data) => {
      if (data.password === credentials.password) {
        const token = createToken(req);
        console.log(token);
        res.send({ ok: true, user: data, message: "Valid User", token: token });
      } else {
        res.send({ ok: false, message: "password is Incorrect" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, message: "Invalid User", error: error });
    });
}

module.exports = { createAccount, login, createAccountUsingMongoose };
