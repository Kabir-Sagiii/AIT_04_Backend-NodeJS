const { connectWithDB } = require("../config/mongodbConnection");
const db = connectWithDB("backend04DB");

function connectWithCollection(collection) {
  return db.collection(collection);
}

function getUsersFromDB(collectionName) {
  const collection = connectWithCollection(collectionName);
  return collection.find().toArray();
}

module.exports = { getUsersFromDB };
