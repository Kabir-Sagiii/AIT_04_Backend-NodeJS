const express = require("express");
const UserRoute = require("./routes/userRoute.js");
const ProductRoute = require("./routes/productRoute.js");
const app = express();
const port = 4242;

app.listen(port, () => {
  console.log(`Http Server Started on ${port} Port Number`);
});

//Configuring the Route
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);
