const express = require("express");
const app = express();
const UserController = require("./controllers/userController");
app.use(express.json());

module.exports = app;