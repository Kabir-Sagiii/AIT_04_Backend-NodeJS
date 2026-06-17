const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//connecting with Mongodb Server
function createConnection() {
  client
    .connect()
    .then(() => {
      console.log("Connected with Mongodb Server");
    })
    .catch((error) => {
      console.log(error);
      console.log();
      console.log("Failed to Connect with Mongodb Server");
    });
}

//connecting with Database
function connectWithDB(db_name) {
  return client.db(db_name);
}

module.exports = { connectWithDB, createConnection };
