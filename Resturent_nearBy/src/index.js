const express = require("express");
const app = express();
const ResturentController = require("./controllers/ResturentController");
const NeighborhoodController = require("./controllers/neighbourhoodsController");
app.use(express.json());

app.use("/resturent", ResturentController);
app.use("/neighborhood", NeighborhoodController);

module.exports = app;
