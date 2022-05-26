const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    ticketId: { type: mongoose.Schema.Types.ObjectId, ref: "parkingTicket", required: true }
});
const History = mongoose.model("history", historySchema);
module.exports = History;