const { connectWithDB } = require("../config/mongodbConnection");
const db = connectWithDB("backend04DB");
const collection = db.collection("users");

function addUserInCollection(data) {
  return collection.insertOne(data);
}

function checkUserIsValid(credentials) {
  console.log(credentials);
  return collection.findOne({ email: credentials.email });
}

module.exports = {
  addUserInCollection,
  checkUserIsValid,
};
