const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    addressLine1: { type: String, required: true },
    city: { type: String, required: true },
    pincode:{type:Number,required:true},
    state: { type: String, required: true },
    country: { type: String, required: true }
});
const AddressModel = mongoose.model("Address", addressSchema);

module.exports = AddressModel;