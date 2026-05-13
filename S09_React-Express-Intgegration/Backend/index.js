const express = require("express");
const cors = require("cors");
const AuthRoute = require("./routes/authRoute");
const app = express();

app.listen(3000, () => {
  console.log("Server Started on 3000 Port Number");
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoute);
