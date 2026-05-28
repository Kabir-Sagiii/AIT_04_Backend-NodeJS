const { connectWithDB } = require("../config/mongodbConnection");
const db = connectWithDB("backend04DB");
const collection = db.collection("users");
const User = require("../schemas/UserSchema.js");

function addUserInCollection(data) {
  return collection.insertOne(data);
}

function addUserWithMongoose(data) {
  return User.create(data);
}

function checkUserIsValid(credentials) {
  console.log(credentials);
  return collection.findOne({ email: credentials.email });
}

module.exports = {
  addUserInCollection,
  checkUserIsValid,
  addUserWithMongoose,
};
