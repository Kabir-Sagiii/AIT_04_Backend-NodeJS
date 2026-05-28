const { Router } = require("express");
const { getCategoryData } = require("../controllers/productController");
const route = Router();

route.get("/products", getCategoryData);
// http://localhost:3000/api/product/products
// method: get
// data as a query params

module.exports = route;
