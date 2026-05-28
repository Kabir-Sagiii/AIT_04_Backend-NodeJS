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

function removeUserFromCollection(id) {
  return User.deleteOne({ _id: id });
}

function updateUserInCollection(id, user) {
  return User.updateOne({ _id: id }, user);
}

module.exports = {
  getUsersFromDB,
  getAllUsersDataFromCollection,
  removeUserFromCollection,
  updateUserInCollection,
};
