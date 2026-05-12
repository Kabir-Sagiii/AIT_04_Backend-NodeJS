const { Router } = require("express");

const route = Router();

route.post("/product", (req, res) => {
  res.send("Post request receivec, processed for Product");
});
// http://localhost:4242/api/product/product

route.get("/product", (req, res) => {
  res.send("Get request receivec, processed for Product");
});
// http://localhost:4242/api/product/product

route.put("/product", (req, res) => {
  res.send("Put request receivec, processed for Product");
});
// http://localhost:4242/api/product/product

route.delete("/product", (req, res) => {
  res.send("Delete request receivec, processed for Product");
});
// http://localhost:4242/api/product/product

module.exports = route;
