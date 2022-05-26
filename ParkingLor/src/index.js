const express = require("express");
const app = express();
const spotcontroller = require("./controllers/spotController");
const ticketcontroller = require("./controllers/ticketController");
const historycontroller = require("./controllers/historyController");

app.use(express.json());

app.use("/spot", spotcontroller);
app.use("/ticket", ticketcontroller);
app.use("/history",historycontroller)
module.exports = app;
