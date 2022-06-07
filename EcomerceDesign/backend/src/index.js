const express = require("express");
const app = express();
const UserController = require("./controllers/userController");
const ProductController=require("./controllers/ProductController")
app.use(express.json());
app.use("/user", UserController);
app.use("/product", ProductController);
module.exports = app;