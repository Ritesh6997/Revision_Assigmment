const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
    total_price: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey:false
});

const OrderModel = mongoose.model("Order", orderSchema);

module.exports = OrderModel;