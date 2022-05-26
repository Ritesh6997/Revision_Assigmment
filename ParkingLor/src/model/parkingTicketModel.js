const mongoose = require("mongoose");
const parkingTicketSchema = new mongoose.Schema({
    carNo: { type: String, required: true },
    spot: { type: mongoose.Schema.Types.ObjectId, ref: "parkingspot", required: true },
    Data: { type: Date, required: true },
    price: { type: Number, required: true }
    
});

const ParkingTicket = mongoose.model("parkingTicket", parkingTicketSchema);
module.exports = ParkingTicket;