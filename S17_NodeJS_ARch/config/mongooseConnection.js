const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/backend04DB";

function connectionToServerDB() {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected with Server & Database");
    })
    .catch(() => {
      console.log("Failed to Connect");
    });
}

module.exports = connectionToServerDB;
