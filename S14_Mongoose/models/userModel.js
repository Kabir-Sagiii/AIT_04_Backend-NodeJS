const { connectWithDB } = require("../config/mongodbConnection");
const db = connectWithDB("backend04DB");

//mongoose
const User = require("../schemas/UserSchema.js");

function getAllUsersDataFromCollection() {
  return User.find();
}

function connectWithCollection(collection) {
  return db.collection(collection);
}

function getUsersFromDB(collectionName) {
  const collection = connectWithCollection(collectionName);
  return collection.find().toArray();
}

module.exports = { getUsersFromDB, getAllUsersDataFromCollection };
