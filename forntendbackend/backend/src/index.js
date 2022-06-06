const express = require("express");
const app = express();
const ProductController = require("./controllers/productController");
app.use(express.json());

app.use("/product", ProductController);
module.exports = app;