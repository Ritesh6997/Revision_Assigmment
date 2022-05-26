const mongoose = require("mongoose");

const parkingSpotSchema = new mongoose.Schema({
    floorNo: { type: Number, required: true },
    spotNo: { type: Number, required: true, unique: true },
    occupied: { type: Boolean, required: false, default: false },
    
    
});

const ParkingSpot = mongoose.model("parkingspot", parkingSpotSchema);
module.exports = ParkingSpot;